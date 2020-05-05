const mongoose = require('mongoose');

const Categories = mongoose.model("Categories");

module.exports = {
    async searchCategories(request,response){
        const categories = await Categories.paginate();
        return response.json(categories);
    },

    async createCategories(request,response){
        const categories = await Categories.create(request.body);
        return response.json(categories);
    },
}