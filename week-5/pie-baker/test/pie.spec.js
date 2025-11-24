/**
 * Author: Nicholas SKelton
 * Date: 11.23.25
 * File Name: pie.spec.js
 * Description: Test
 */

"use strict";

const { bakePie } = require("../src/pie");

const exit = jest.spyOn(process, "exit").mockImplementation(code => code);

describe("bakePie", () => {
  let warn;

  beforeEach(() => {
    warn = jest.spyOn(console, "warn");
  });

  afterEach(() => {
    warn.mockRestore();
  });

  //Successful test

  test("Successful test if all essIngredients are present", () => {
    const result = bakePie("sweet potato", ["flour", "sugar", "butter"]);

    expect(result).toBe("Successfully baked a sweet potato pie!");
    expect(warn).not.toHaveBeenCalled();
    expect(exit).not.toHaveBeenCalled();
  });

  // Test for missing ingredient: flour

  test("Exits if flour is missing.", () => {
    bakePie("apple", ["sugar", "butter"]);

    expect(warn).toHaveBeenCalledWith("Missing essential ingredient: flour");
    expect(exit).toHaveBeenCalledWith(1);
  });

  // Test for missing ingredient: butter

  test("Exits if butter is missing.", () => {
    bakePie("pumpkin", ["flour", "sugar"]);

    expect(warn).toHaveBeenCalledWith("Missing essential ingredient: butter");
    expect(exit).toHaveBeenCalledWith(1);
  });
});