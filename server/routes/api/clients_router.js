const express = require('express');
const mongodb = require('mongodb');
const Client = require('../../models/client_model.js');
const {errors_client} = require("./manage_validation_errors.js");

const router = express.Router();

// Get one client
router.get('/:id', function (req, res) {
   Client.findOne({_id: req.params.id}).populate('providers').exec( function (err, data) {
      if (err) return res.status(404).send(err);
      res.send(data);
   });
});

// Get all clients
router.get('/', function (req, res) {
   Client.find().sort('name').populate('providers').exec(function (err, data) {
      if (err) return res.status(404).send(err);
      res.send(data);
   });
});

// Add client
router.post('/', function (req, res) {

   //validate provider's field
   if (req.body.providers.length === 0)
      return res.status(409).send(["Field `Providers` is required"]);

   // init() for validation unique name
   Client.init().then(function() {
      //if unique
      Client.create({
         name: req.body.name,
         email: req.body.email,
         phone: req.body.phone,
         providers: req.body.providers,
      },
          function (err) {
            if (err) return res.status(409).send(errors_client(err));
            res.status(201).send();
      });
   })
       //if not unique
       .catch(err =>{
          if (err) return res.status(409).send(errors_client(err));
       })
});

// Delete client
router.delete('/:id', function (req, res) {
   Client.deleteOne({_id: req.params.id}, function (err) {
      if (err) return res.status(404).send(err);
      res.status(200).send();
   });
});

// Update client
router.put('/:id', function (req, res) {

   //validate provider's field
   if (req.body.providers.length === 0)
      return res.status(409).send(["Field `Providers` is required"]);

   Client.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}, function(err) {
      if (err) return res.status(409).send(errors_client(err));
      res.status(200).send();
   });
});

module.exports = router;