const dotenv = require('dotenv');

const valores = dotenv.config();

if (valores.error) {
    throw valores.error; 
}

const {parsed: envs } = valores;

module.exports = envs;