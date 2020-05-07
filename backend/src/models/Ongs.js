const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const OngsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description : {
        type: String,
        required: true,
    },

    category : {
        type: String,
        required: true,
    },

    email : {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    cnpj : {
        type: Number,
        required: true,
    },

    createdAt : {
        type: Date,
        default: Date.now,
    },
})

OngsSchema.plugin(mongoosePaginate);
mongoose.model("Ongs", OngsSchema);