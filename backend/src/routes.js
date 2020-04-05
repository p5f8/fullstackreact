const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const sessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', sessionController.create)

routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        zapzap: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ongController.create);

routes.get('/incidents', incidentController.index);
routes.get('/incidents/:ongid', incidentController.byOngId);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);


/*
routes.get('/', function(req, res) {
    const params = req.query;
    console.log('parametros:', params);
    return res.send('devolvendo algo!');
});

routes.get('/users/:id', function(req, res) {
    const params = req.params;
    console.log('parametros:', params);
    return res.send(`devolvendo algo! parametro recebido=[${params.id}]`);
});

routes.get('/users', function(req, res) {
    const body = req.body;
    console.log("parametros: ", body);
    return res.send(`este é o endpoint GET /users com JSON body -->  devolvendo algo! parametro BODY recebido=[${body}]`);
});
*/

module.exports = routes;