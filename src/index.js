require('dotenv').config();
const { app } = require('./app.js');

async function startServer() {
    try {
        app.listen(4000);
        console.log('Server corriendo en puerto 4000');
    } catch (error) {
        console.log(error);
    }
}

startServer();