const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const mongoose = require('mongoose');
require('dotenv').config();

//Middleware
app.use(bodyParser.json());
app.use(express.static(path.resolve('dist/')));

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//route to index.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve('/dist/index.html'));
});

//route to api/clients
const clients = require('./routes/api/clients_router.js');
app.use('/api/clients', clients);

//route to api/providers
const providers = require('./routes/api/providers_router.js');
app.use('/api/providers', providers);

// mongo and server
const port = process.env.PORT_DOCKER;
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex:true,
};

//start mongo
mongoose.connect(`mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`, options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('WE ARE CONNECTED TO MONGODB!');

    //and start server
    app.listen(port, function () {
        setTimeout(function() {
            console.log(`LISTENING ON PORT ${process.env.PORT_MACHINE}...`);
        }, 2000);

    });
});

