const app = require('./app_config/config');

const PORT = process.env.PORT || 3030;

const upServerMsg = () => console.log(`Realtime server running on port ${PORT}`)
app.listen(PORT).on(
    'listening', 
    upServerMsg
);
