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
        unique: true,
    },

    password: {
        type: String,
        required: true,
        select: false,
    },

    cnpj : {
        type: Number,
        required: true,
        unique: true,
    },

    createdAt : {
        type: Date,
        default: Date.now,
    },
})

OngsSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})
OngsSchema.plugin(mongoosePaginate);
mongoose.model("Ongs", OngsSchema);