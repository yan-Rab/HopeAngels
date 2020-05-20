const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const CasesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    ong : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Ongs',
        required: true,
    },

    value: {
        type: Number,
        required: true,
    },

    createdAt : {
        type: Date,
        default: Date.now,
    },
})

CasesSchema.plugin(mongoosePaginate);

mongoose.model("Cases",CasesSchema);