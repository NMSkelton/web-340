"use strict";

// For promises:
const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();

    jest.spyOn(fs, 'writeFile').mockImplementation(() =>
      Promise.resolve()
    );

    jest.spyOn(fs, 'readFile').mockImplementation(() =>
      Promise.resolve(JSON.stringify([
        { class: "Mage", gender: "Male", funFact: "Is a member of the Kirin Tor" }
      ])
    )
  );

    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // 1. Test that createCharacter writes a new character to the file
  test("writes the character", async () => {
    const character = { class: "Mage", gender: "Male", funFact: "Is a member of the Kirin Tor" };

    await expect(createCharacter(character)).resolves.toBeUndefined();
    expect(fs.writeFile).toHaveBeenCalled();
  });

  // 2. Test that getCharacters reads characters from the file
  test("reads the character", async () => {
    const characters = await getCharacters();

    expect(characters).toEqual([
      { class: "Mage", gender: "Male", funFact: "Is a member of the Kirin Tor" }
    ]);
  });

  // 3. Test that createCharacter handles errors when writing to the file
  test("handles the error", async () => {
    fs.writeFile.mockImplementationOnce(() =>
      Promise.reject(new Error("Write failed"))
    );

    const character = { class: "Mage", gender: "Male", funFact: "Is a member of the Kirin Tor" };

    await expect(createCharacter(character)).rejects.toThrow("Write failed");
  });
});