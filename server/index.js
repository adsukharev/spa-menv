const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./database');
const path = require('path');
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve('dist/')));

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
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`server works on port ${port}`);
});