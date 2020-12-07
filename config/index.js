require('dotenv').config()

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
    PORT: parseInt(process.env.PORT, 10),
    IP: process.env.IP || "127.0.0.1"
}


export default {

    // PORT for running our application
    PORT: parseInt(process.env.PORT, 10),

    // logging
    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },
}