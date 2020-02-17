const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // username: { type: String, unique: true, required: true },
    // hash: { type: String, required: true },

    first_name: { type: String, required: true },
    last_name: { type: String,  required: true },
    practice_name: { type: String, required: true },
    state: { type: String, required: true },
    oa_member: { type: String, required: true },
    promo_code: { type: String, required: true },

});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
