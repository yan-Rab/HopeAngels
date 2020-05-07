const mongoose = require("mongoose");

const Cases = mongoose.model("Cases");

module.exports = {
    async searchCases(request,response){
        const { page = 1 } = request.query; 
        const cases = await Cases.paginate({},{page,limit: 4});
        return response.json(cases);
    },

    async createCases(request,response){
        const cases = await Cases.create(request.body);
        return response.json(cases);
    },

    async destroyCases(request,response){
        await Cases.findByIdAndDelete(request.params.id);
        return response.send("Caso deletado!");
    },
}