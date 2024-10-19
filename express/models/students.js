const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentID: String,
    Name: String,
    Yearofstudy: String,
    Email:{
        type: String,
        required: true
    }
},{
    timestamps: true
}
);

module.exports = mongoose.model('Students', studentSchema);