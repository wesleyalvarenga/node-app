var request = require('supertest');

var app = require('../index.js');

describe('GET /', function(){
    it('response with Hello World', function(done){
        request(app).get('/').expect('Hey World', done);
    });
});