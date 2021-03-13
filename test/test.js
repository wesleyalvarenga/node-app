var request = require('supertest');

var app = require('../index.js');

describe('GET /', function(){
    it('response with DevOps. Wesley Alvarenga.', function(done){
        request(app).get('/').expect('Wesley Alvarenga.', done);
    });
});