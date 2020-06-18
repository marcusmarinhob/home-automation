/** HTTP Server *********************************** */
const express = require("express")
const server = express()

server.listen(3000)
server.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

/** MQTT Client *********************************** */
var mqtt = require('mqtt')
var client  = mqtt.connect([{host:'localhost', port: 1883}])

client.on('connect', function () {  
    client.subscribe('message', function (err) {
    if (!err) {
        console.log('MQTT connected')
        client.publish('home/connected', 'Home Automation')
    }
  })
})

client.subscribe('home/room/lamp/+')
client.on('message', function (topic, message) {
  console.log("topic: "+ topic.valueOf() +" - message: " + message.toString())
})