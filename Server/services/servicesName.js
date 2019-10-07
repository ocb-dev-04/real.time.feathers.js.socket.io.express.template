const moment = require('moment');

// SERVICES_NAME SERVICES
module.exports = class ServicesName {
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