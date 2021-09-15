const mongoose = require('mongoose');

async function connect(url) {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connect Database sucessfully')
    }
    catch (e) {
        console.log('Connect Database failure')
        console.log(e);
    }
}

module.exports = { connect };