const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

UsersSchema.plugin(mongoosePaginate);

mongoose.model("Users", UsersSchema);

