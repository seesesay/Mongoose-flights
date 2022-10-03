const express = require('express');
const Flight = require('../models/Flight');
const router = express.Router();

router.get('/', (req, res) => {
  Flight.find({}, (error, allFlights) => {
    res.render('flights/Index', {
      flights: allFlights
    })
  })
})

router.get('./new', (req, res) => { 
  res.render('flights/New');
});

router.post('/', (req, res)=>{
  Flight.create(req.body, (error, createdFlight) => {
    res.redirect('/flights')
  });
});

module.exports = router; 