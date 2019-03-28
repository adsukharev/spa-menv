const express = require('express');
const mongodb = require('mongodb');
const Providers = require('../../models/provider_model.js');

const router = express.Router();

// Get all providers
router.get('/', function (req, res) {
   Providers.find(function (err, data) {
      if (err) return res.status(404).send(err);
      res.send(data);
   });
});

// Get one provider
router.get('/:id', function (req, res) {
   Providers.findOne({_id: req.params.id}, function (err, data) {
      if (err) return res.status(404).send(err);
      res.send(data);
   });
});

// Add provider
router.post('/', function (req, res) {
   Providers.create({
      name: req.body.name,
   }, function (err, data) {
      if (err) return res.status(404).send(err);
      res.status(201).send();
   });

});

// Delete provider
router.delete('/:id', function (req, res) {
   Providers.deleteOne({_id: req.params.id}, function (err, data) {
      if (err) return res.status(404).send(err);
      res.status(200).send();
   });
});

// Update provider
router.put('/:id', function (req, res) {
   Providers.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
      if (err) return res.status(404).send(err);
      res.status(200).send();
   });
});

module.exports = router;