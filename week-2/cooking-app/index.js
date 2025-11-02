/**
 * Author: Nicholas Skelton
 * Date: 11.1.25
 * File Name: index.js
 * Description:
*/

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require("./recipes");

// TODO: Implement your CLI program here
const newRecipe = createRecipe(["horseradish", "oysters", "chocolate"]);
console.log(newRecipe);

const newTimer = setTimer(47);
console.log(newTimer);

const newQuit = quit();
console.log(newQuit);