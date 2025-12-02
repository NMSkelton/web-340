const http = require('http');
const server = require('../src/server');

describe(`Character`, () => {

  afterAll(() => {
    server.close();
  });

  test(`creates a character`, done => {
    const options = {
      hostname: `localhost`,
      port: 3000,
      path: '/create-character?class=Mage&gender=Male&fact=a%20member%20of%20the%20Kirin%20Tor?',
      method: `POST`
    };

    const req = http.request(options, res => {
      let data = "";

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe(`Male Mage created! Did you know that they are a member of the Kirin Tor?`);
        done();
      });
    });

    req.end();
  })

    test(`confirms the character`, done => {
    const options = {
      hostname: `localhost`,
      port: 3000,
      path: '/confirm-character',
      method: `POST`
    };

    const req = http.request(options, res => {
      let data = "";

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe(`Your character has been created!`);
        done();
      });
    });

    req.end();
  })

    test(`views the character`, done => {
    const options = {
      hostname: `localhost`,
      port: 3000,
      path: '/view-character',
      method: `GET`
    };

    const req = http.request(options, res => {
      let data = "";

      res.on('data', chunk => {
        data += chunk;
      });

      res.on('end', () => {
        expect(res.statusCode).toBe(200);

        const char = JSON.parse(data);

        expect(char.class).toBe(`Mage`);
        expect(char.gender).toBe(`Male`);
        expect(char.fact).toBe(`a member of the Kirin Tor?`)
        done();
      });
    });

    req.end();
  })
});