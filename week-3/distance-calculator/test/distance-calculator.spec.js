const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

// Test 1 - Simple distance
function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance("Earth", "Mars"), 0.52);
    console.log("Test passed!");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Test 2 - Case sensitivity
function testMercuryToPluto() {
  try {
    assert.strictEqual(calculateDistance("mERcURy", "pLutO"), 39.11);
    console.log("Test passed!");
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToPluto: ${error.message}`);
    return false;
  }
}

// Test 3 - Planet order
function testSaturnToVenus() {
  try {
    assert.strictEqual(calculateDistance("Saturn", "Venus"), 8.78);
    console.log("Test passed!");
    return true;
  } catch (error) {
    console.error(`Failed testSaturnToVenus: ${error.message}`);
    return false;
  }
}

// Call your test functions here

testEarthToMars();
testMercuryToPluto();
testSaturnToVenus();