const generateUniqueId = require('../utils/generateuniqueid')
const connection = require('../database/connection')

module.exports = {

    async index(req, res) {
        const ongs = await connection('ongs').select('*');

        return res.json(ongs);
    },

    async create(req, res) {
        const { name, email, zapzap, city, uf } = req.body;

        const id = generateUniqueId()

        await connection('ongs').insert({
            id,
            name,
            email,
            zapzap,
            city,
            uf,
        })


        return res.json(id);
    }

};