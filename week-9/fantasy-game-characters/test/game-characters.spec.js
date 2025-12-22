"use strict";

// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters();
  });

  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((data, error) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { Class: "Warrior", Gender: "Male", Fact: "Wielded Shalamayne, a sword created from the magical fusing of two night elven blades. " },
        { Class: "Shaman", Gender: "Male", Fact: "Defeated Garrosh Hellscream in a mak'gora, a duel to the death." },
        { Class: "Mage", Gender: "Female", Fact: "Can entomb herself in a block of ice and teleport away." }
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    const gameCharacters = new GameCharacters("nonexistent-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    const gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getCharacters((data, error) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
});