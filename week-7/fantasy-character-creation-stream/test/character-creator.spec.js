"use strict";

const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const character = {
      class: "Mage",
      gender: "Male",
      fact: "are a member of the Kirin Tor."
    };

    characterCreator.write(JSON.stringify(character));
    characterCreator.end();

    characterCreator.on("data", (data) => {
      expect(data.toString().trim()).toBe(
        `Your character is a Male Mage. Did you know they are a member of the Kirin Tor.`
      );

      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on("error", (err) => {
      expect(err.message).toBe("Invalid data");
      done();
    });

    characterCreator.write(JSON.stringify({ class: "", gender: "Male" }));
  });

  test("should transform data correctly when written to", (done) => {
    const character = {
      class: "Mage",
      gender: "Male",
      fact: "are a member of the Kirin Tor."
    };
    const expectedOutput = `Your character is a Male Mage. Did you know they are a member of the Kirin Tor.`;

    characterCreator.write(JSON.stringify(character), "utf8", () => {
      characterCreator.on("data", (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });
  });
});
