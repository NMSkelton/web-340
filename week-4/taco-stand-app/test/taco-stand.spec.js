/**
 * Author: Nicholas Skelton
 * Date: 11.15.25
 * File Name: taco-stand.spec.js
 * Description: Test
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");
const tacoStand = new TacoStandEmitter();

// ServeCustomer test
function testServeCustomer() {
  try {
    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "Bart");
    });

    tacoStand.serveCustomer("Bart");

    console.log("Passed testServeCustomer");
    return true;
    } catch(err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

// PrepareTaco test
function testPrepareTaco() {
  try {
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "Pork");
    });

    tacoStand.prepareTaco("Pork");

    console.log("Passed testPrepareTaco");
    return true;
    } catch(err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

// HandleRush test
function testHandleRush() {
  try {
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "Lunch");
    });

    tacoStand.handleRush("Lunch");

    console.log("Passed testHandleRush");
    return true;
    } catch(err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

// Call functions
testServeCustomer();
testPrepareTaco();
testHandleRush();