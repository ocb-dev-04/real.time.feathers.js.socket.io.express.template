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

        this.new_services_name.push(idea);

        return new_services_name;
    }
}

const app = express(feathers());
// PARSE JSON
app.use(express.json());
// CONFIG SOCKET.IO REALTIME APIs
app.configure(socketio());
// ENABLE REST SERVICES
app.configure(express.rest());
// REGISTER SERVICES
app.use('/services_name', new ServicesNameService());
// NEW CONNECTIONS CONNECT TO STREAM CHANNEL
app.on('connection', con => app.channel('stream').join(con));
// PUBLISH EVENTS TO STREAM
app.publish(data => app.channel('stream'));

const PORT = process.env.PORT || 3030;

app.listen(PORT).on('listenning', () => console.log(`Realtime server running on port ${PORT}`));