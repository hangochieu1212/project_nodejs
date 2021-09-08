const mongoose = require('mongoose');
async function connect() {
    //ket noi voi db
    try {
        await mongoose.connect('mongodb://localhost:27017/dang-ky-hoc_dev');
        console.log('Connect Successfully!!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}
module.exports = { connect };

//CONNECT DB
/*
const mongoose= require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/hieu1212_dev');
        console.log('KET NOI THANH CONG');
        
    } catch (error) {
        console.log('KET NOI THAT BAI');
        
    }
    
}
module.exports = { connect };
*/
