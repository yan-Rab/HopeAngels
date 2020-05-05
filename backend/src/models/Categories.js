const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const CategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }

});

CategoriesSchema.plugin(mongoosePaginate);

mongoose.model("Categories", CategoriesSchema);