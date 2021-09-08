const mongoose = require('mongoose');
//onst { connect } = require('../../routes/me');

async function connect() {
   
    try {
        await mongoose.connect('mongodb://localhost:27017/hieu1212_dev');
        console.log('KET NOI DA THANH CONG');
    } catch (error) {
        console.log("KET NOI THAT BAI");
    }
    
}
module.exports ={ connect};
