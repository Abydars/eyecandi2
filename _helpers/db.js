require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB , { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
};


//=============================================================================================================
// const config = require('config.json');
// const mongoose = require('mongoose');
// mongoose.connect(process.env.DB || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
// mongoose.Promise = global.Promise;
//
// module.exports = {
//     User: require('../users/user.model'),
//     // website: require('../websites/website.model')
// };





