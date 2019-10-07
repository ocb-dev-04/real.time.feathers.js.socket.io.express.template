const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

// use express with feathers
const app = express(feathers());


// -----------------------------------------------------------------------------------------------------------------------------


// IMPORT SERVICES CLASS
const ServicesName = require('../services/servicesName');


// -----------------------------------------------------------------------------------------------------------------------------


// SERVER CONFIG
// parse json
app.use(express.json());
// config socketio realtime APIs
app.configure(socketio());
// enable rest services
app.configure(express.rest());


// -----------------------------------------------------------------------------------------------------------------------------


// ROUTES CONFIG
// register services
app.use(
    '/services', 
    new ServicesName()
);

// register more services ( remember import for use in the section IMPORT SERVICES CLASS)
// app.use(
//     '/other-services', 
//     new OtherServicesName()
// );


// -----------------------------------------------------------------------------------------------------------------------------


// CHANNEL CONFIG
// new connection to connect stream channel
app.on(
    'connection', 
    con => app.channel('stream').join(con)
);

// PUBLISH EVENTS TO STREAM
app.publish(data => app.channel('stream'));


module.exports = app;