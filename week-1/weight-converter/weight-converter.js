/**
 * Author: Nicholas Skelton
 * Date: 10.23.25
 * File Name: weight-converter.js
 * Description: Pounds to Kilograms Weight Converter
*/

"use strict";

// TODO: Implement the weight conversion logic here

function convertWeight() {
  const pounds = process.argv[2];

  // Error if incorrect amount of command line arguements
  if (process.argv.length != 3) {
    console.error("Usage: node weight-converter.js <pounds>");
    process.exit(1);
  }

  // Error if input is not a number
  if (isNaN(pounds)) {
    console.error("Input must be a number.");
    process.exit(1);
  }

  // Convert pounds to kilograms
  const kilos = (pounds * .454).toFixed(2);

  // Display the conversion of pounds to kilograms
  console.log(`${pounds} pounds is equal to ${kilos} kilograms.`);
}

convertWeight();