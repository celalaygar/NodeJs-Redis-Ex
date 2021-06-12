	
var redis = require('redis');
var client = redis.createClient(); //creates a new client

client.on('connect', function () {
    console.log('Redis client bağlandı');
});
 
client.on('error', function (err) {
    console.log('Redis Clientda bir hata var ' + err);
});