/**
 * Author: Nicholas Skelton
 * Date: 11.23.25
 * File Name: pie.js
 * Description: Pie
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essIngredients = ["flour", "sugar", "butter"];

  for (let item of essIngredients) {
    if (ingredients.includes(item) === false) {
      console.warn(`Missing essential ingredient: ${item}`);
      process.exit(1);
    }
  }

  return `Successfully baked a ${pieType} pie!`;
}

module.exports = { bakePie };