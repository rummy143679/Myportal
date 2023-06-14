const mongoose = require('mongoose');



const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }


}, { collection: 'students' });// students is scheema name

// const contactSchema = new Schema({
//     phoneNumber: {
//       type: String,
//       required: true,
//       validate: {
//         validator: function (value) {
//           // Customize this function based on your desired validation criteria
//           const regex = /^\d{10}$/; // Example: Validates 10-digit phone number
//           return regex.test(value);
//         },
//         message: 'Invalid phone number format'
//       }
//     },
//     // other fields...
//   });

module.exports = mongoose.model('Student', studentSchema, 'students')