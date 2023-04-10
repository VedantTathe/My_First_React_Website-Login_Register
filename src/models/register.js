
const mongoose = require("mongoose");

const Registerschema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pswd: {
        type: String,
        required: true
    }
});


const Register = mongoose.model("Registers", Registerschema);

module.exports = Register;