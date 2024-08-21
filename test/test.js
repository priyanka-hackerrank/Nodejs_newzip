const assert = require('assert');
const request = require('supertest');
const app = require('../app.js');

describe('GET /', function() {
  it('should render index.pug', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert(res.text.includes('<p>Welcome to App</p>'));
        done();
      });
  });
});
