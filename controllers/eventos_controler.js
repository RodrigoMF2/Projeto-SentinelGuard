const Eventos = require('../models/eventos');
const Camara = require('../models/camara');

exports.createevento = (req, res, next) => {
    Eventos.create(req.body)
    .then(evento =>{
        res.status(201).json(evento);
    })
    .catch(error =>{
        res.status(400).json({ error: error.message });
    })
}

exports.getAllEventos = (req,res,next) => {
    Eventos.findAll({include: Camara})
    .then(evento =>{
        res.status(201).json(evento)})
    .catch(error =>
        res.status(400).json({ error: error.message }))
}

exports.getEventoById = (req,res,next) => {
    const id = req.params;
    Eventos.findByPk(id,{include : Camara})
    .then(evento =>{
        if (evento) {
            res.status(200).json(evento);
        }else{
            res.status(404).json({error: 'Evento nao encontrado'});
        }
    })
    .catch(error =>res.status(400).json({error: error.message}))}

exports.updateEvento = (req, res, next) => {
    const id = req.params;
    const {camara_id, tipo, descricao, data_hora_evento} = req.body;
    Eventos.findByPk(id)
    .then(evento =>{
        if(evento) {
            evento.update({
                camara_id,
                tipo,
                descricao,
                data_hora_evento
            })
            .then(updatedEvento => res.status(200).json(updatedEvento))
            .catch(error => res.status(400).json({ error: error.message }));
        }else{
            res.status(404).json({ error: 'Evento not found' });
        }
    })
    .catch(error => res.status(400).json({ error: error.message }));
}

exports.deleteEvento = (req, res, next) => {
    const { id } = req.params;
    Eventos.findByPk(id)
    .then(evento => {
        if (evento) {
            evento.destroy()
            .then(() => res.status(204).json())
            .catch(error => res.status(400).json({ error: error.message }));
        } else {
            res.status(404).json({ error: 'Evento not found' });
        }
    })
    .catch(error => res.status(400).json({ error: error.message }));
};

exports.getEventoWithCameraLocation = (req, res, next) => {
    const id = req.params.id;
    console.log(`Fetching evento with ID: ${id}`);

    Eventos.findByPk(id, {
        include: [{
            model: Camara,
            attributes: ['localizacao']
        }]
    })
    .then(evento => {
        if (evento) {
            console.log(`Evento encontrado: ${JSON.stringify(evento)}`);
            res.status(200).json({
                evento: evento,
                localizacao: evento.CAMARA ? evento.CAMARA.localizacao : null
            });
        } else {
            console.log('Evento not found');
            res.status(404).json({ error: 'Evento not found' });
        }
    })
    .catch(error => {
        console.error('Error fetching evento:', error);
        res.status(400).json({ error: error.message });
    });
};