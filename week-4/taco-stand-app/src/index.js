/**
 * Author: Nicholas Skelton
 * Date: 11.15.25
 * File Name: index.js
 * Description: Index
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Event listeners
tacoStand.on("serve", (customer) => {
  console.log("Taco stand serves: " + customer);
})

tacoStand.on("prepare", (taco) => {
  console.log("Taco stand prepares: " + taco);
})

tacoStand.on("rush", (rush) => {
  console.log("Taco stand handles rush: " + rush);
})

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // Define argument for switch statements, combining all words after command
  const argument = args.join(" ");

  // Take command input and execute corresponding method
  switch (command) {
    case "serve":
      tacoStand.serveCustomer(argument);
      break;

    case "prepare":
      tacoStand.prepareTaco(argument);
      break;

    case "rush":
      tacoStand.handleRush(argument);
      break;
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);