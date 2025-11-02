/**
 * Author: Nicholas SKelton
 * Date: 11.1.25
 * File Name: recipes.js
 * Description:
*/

// Define the createRecipe function

/* This function took me a while to get right, and I'm still not sure if it's the "correct" way to
write it, but it gets the job done. I would welcome any feedback on what would have been a better
or more efficient way to write it */

function createRecipe(ingredients) {
  let recipeList = ""      // Declare recipeList to collect ingredients

  for (i = 0; i < ingredients.length; i++) {
    if (i !== ingredients.length - 1) {   // If statement for every index 'except' the last one, appending to recipeList with a comma and space
      recipeList += (ingredients[i] + ", ");
    } else {
      recipeList += ingredients[i];     // Else statement for first (and only) index that isn't not the last one, appending to recipeList but not adding a comma
    }
  }
  return "Recipe created with ingredients: " + recipeList;   // Console log with recipeList
}

// Define the setTimer function
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  return "Program exited";
}

module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit,
}