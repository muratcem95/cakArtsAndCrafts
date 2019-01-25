const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cakartsandcrafts', {useNewUrlParser: true});

module.exports = {mongoose};