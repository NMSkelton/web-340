"use strict";

const http = require('http');
const url = require('url');

let createdChar = null;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === "/create-character" && req.method === "POST") {
    const charClass = query.class;
    const charGender = query.gender;
    const charFact = query.fact;

    createdChar = {
      class: charClass,
      gender: charGender,
      fact: charFact,
    }

    res.writeHead(201);
    res.end(`${charGender} ${charClass} created! Did you know that they are ${charFact}`)

  } else if (pathname === "/confirm-character" && req.method === "POST") {

    res.writeHead(200);
    res.end(`Your character has been created!`)

  } else if (pathname === "/view-character" && req.method === "GET") {

    res.writeHead(200);
    res.end(JSON.stringify(createdChar));
  }

});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;