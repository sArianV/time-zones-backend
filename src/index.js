require('dotenv').config();
const { app } = require('./app.js');

async function startServer() {
    try {
        app.listen(process.env.PORT || 4000);
        console.log('Server corriendo en puerto'+ process.env.PORT );
    } catch (error) {
        console.log(error);
    }
}

startServer();