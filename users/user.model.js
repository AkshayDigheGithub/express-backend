const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true },
    hash: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    city: { type: String },
    password: { type: String },
    createdDate: { type: Date, default: Date.now },
    phone: { type: Number }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);