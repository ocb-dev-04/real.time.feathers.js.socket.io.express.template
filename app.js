// const feathers = require('@feathersjs/feathers');
// const express = require('@feathersjs/express');
// const socketio = require('@feathersjs/socketio');
// const moment = require('moment');

// // Idea Service
// class IdeaService {
//   constructor() {
//     this.ideas = [];
//   }

//   async find() {
//     return this.ideas;
//   }

//   async create(data) {
//     const idea = {
//       id: this.ideas.length,
//       text: data.text,
//       tech: data.tech,
//       viewer: data.viewer
//     };

//     idea.time = moment().format('h:mm:ss a');

//     this.ideas.push(idea);

//     return idea;
//   }
// }

// const app = express(feathers());

// // Parse JSON
// app.use(express.json());
// // Config Socket.io realtime APIs
// app.configure(socketio());
// // Enable REST services
// app.configure(express.rest());
// // Register services
// app.use('/ideas', new IdeaService());

// // New connections connect to stream channel
// app.on('connection', conn => app.channel('stream').join(conn));
// // Publish events to stream
// app.publish(data => app.channel('stream'));

// const PORT = process.env.PORT || 3030;

// app
//   .listen(PORT)
//   .on('listening', () =>
//     console.log(`Realtime server running on port ${PORT}`)
//   );

// app.service('ideas').create({
//   text: 'Build a cool app',
//   tech: 'Node.js',
//   viewer: 'John Doe'
// });
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const moment = require('moment');

// SERVICES_NAME SERVICES
class ServicesNameService {
    constructor() {
        this.services_name = [];
    }

    async find() {
        return this.services_name;
    }

    async create(data) {
        const new_services_name = {
            id: this.services_name.length,
            text: data.text,
            tech: data.tech,
            viewer: data.viewer
        }

        new_services_name.time = moment().format('h:mm:ss a');

        this.services_name.push(new_services_name);

        return new_services_name;
    }
}

// ASING EXPRESS WITH FEATHERS
const app = express(feathers());

// PARSE JSON
app.use(express.json());

// CONFIG SOCKET.IO REALTIME APIs
app.configure(socketio());

// ENABLE REST SERVICES
app.configure(express.rest());

// REGISTER SERVICES
app.use(
    '/services', 
    new ServicesNameService()
);

// NEW CONNECTIONS CONNECT TO STREAM CHANNEL
app.on(
    'connection', 
    con => app.channel('stream').join(con)
);

// PUBLISH EVENTS TO STREAM
app.publish(data => app.channel('stream'));

const PORT = process.env.PORT || 3030;

const upServerMsg = () => console.log(`Realtime server running on port ${PORT}`)
app.listen(PORT).on(
    'listening', 
    upServerMsg
);

// EXAMPLE IDEA DEFAULT
// app.service('services').create({
//     text: 'Build a cool app',
//     tech: 'NodeJS',
//     viewer: 'John Doe',
//     time: moment().format('h:mm:ss a')
// });