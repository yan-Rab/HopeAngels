const mongoose = require("mongoose");

const Cases = mongoose.model("Cases");

module.exports = {
    async searchCases(request,response){
        const { page = 1 } = request.query; 
        const cases = await Cases.paginate({},{page,limit: 6});
        return response.json(cases);
    },

    async searchCasesById(request, response){
        const { page = 1} = request.body;
        const { ong } = request.body;
        const cases = await Cases.paginate({ong: ong}, {page,limit: 6});
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