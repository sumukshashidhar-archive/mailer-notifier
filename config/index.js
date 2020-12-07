require('dotenv').config()

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';


export default {

    // PORT for running our application
    PORT: parseInt(process.env.PORT, 10),
    
    // logging
    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },
}