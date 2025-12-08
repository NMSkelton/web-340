"use strict";

const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const data = JSON.parse(chunk.toString());

    if (!data.class || !data.gender || !data.fact) {
      callback(new Error("Invalid data"));
      return;
    }

    this.queue.push(`Your character is a ${data.gender} ${data.class}. Did you know they ${data.fact}`);
    callback();
  }

  _read(size) {
    // TODO: Implement your _read method here
    if (this.queue.length) {
      this.push(this.queue.shift() + "\n");
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;