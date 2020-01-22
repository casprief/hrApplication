const mongoose = require('mongoose');
const URI = 'mongodb://localhost/hr-crud';

mongoose.connect(URI)
    .then(deb => console.log('DB is connected'))
    .catch(err => console.error());

module.exports = mongoose;