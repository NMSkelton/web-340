"use strict";

const fs = require('fs').promises;
const { join } = require("path");

const CHARACTERS_FILE = join(__dirname, "characters.txt")

async function createCharacter(character) {
  try {

    let characters = [];

    try {
      const data = await readFile(CHARACTERS_FILE, "utf8");
      characters = JSON.parse(data);
    } catch (err) {

      characters = [];
    }

    characters.push(character);

    await fs.writeFile(CHARACTERS_FILE, JSON.stringify(characters));
  } catch (err) {
    throw err;
  }
}


async function getCharacters() {
  try {
    const data = await fs.readFile(CHARACTERS_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    throw err;
  }
}

module.exports = { createCharacter, getCharacters }; // For promises