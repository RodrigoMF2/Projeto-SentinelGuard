const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const port = 3001;
const host = 'localhost';
const app = express();

const errorController = require('./controllers/error404');
const MinhaConexãoBD = require('./util/database');

// Importando modelos
const user = require('./models/user');
const camara = require('./models/camara');
const eventos = require('./models/eventos');
const videos = require('./models/videos');
const image_recognition = require('./models/image_recognition');
const funcionario = require('./models/funcionarios')

//importando as rotas
const userRoutes = require('./routes/user_route');
const camaraRoutes = require ('./routes/camara_route');
const eventoRoutes = require ('./routes/evento_route');
const funcRoutes = require('./routes/func_route');
const videoRoutes = require('./routes/video_route');
const imgrecognitionRoute = require('./routes/img_reco_route');


// Middleware
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//relação entre as tabelas
user.hasMany(eventos, { foreignKey: 'usuario_id' });
eventos.belongsTo(user, { foreignKey: 'usuario_id' });

camara.hasMany(videos, { foreignKey: 'camara_id' });
videos.belongsTo(camara, { foreignKey: 'camara_id' });

camara.hasMany(eventos, { foreignKey: 'camara_id' });
eventos.belongsTo(camara, { foreignKey: 'camara_id' });

camara.hasMany(image_recognition, { foreignKey: 'camara_id' });
image_recognition.belongsTo(camara, { foreignKey: 'camara_id' });

funcionario.hasMany(image_recognition, { foreignKey: 'id_funcionario' });
image_recognition.belongsTo(funcionario, { foreignKey: 'id_funcionario' });


// Rota de teste
app.use('/teste', userRoutes);
app.use('/teste', camaraRoutes);
app.use ('/teste', eventoRoutes);
app.use('/teste', funcRoutes);
app.use('/teste', videoRoutes);
app.use('/teste', imgrecognitionRoute);


app.use(errorController.getError404);

//Autenticação na base de dados
// Sincronização dos modelos com o banco de dados
MinhaConexãoBD
.authenticate()
.then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    // Sincronizar modelos com o banco de dados
    //return MinhaConexãoBD.sync({force: true});
    return MinhaConexãoBD.sync();
})
.then(() => {
    // Iniciando o servidor
    app.listen(port, host, () => {
    //console.log(`Servidor executando em http://${host}:${port}`);
    });
})
.catch(error => {
    console.error('Erro ao conectar ou sincronizar com o banco de dados:', error);
    process.exit(1); // Termina o programa com código de saída 1
});

module.exports = app;







