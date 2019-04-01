const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const path = require('path');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

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

//start server
const port = 3333;
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});