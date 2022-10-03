const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const flightSchema = new Schema({


airline: {
  type: String, 
  enum: ['American', 'Southwest', 'United']
},
flightNo: {
  type: Number,
  min: 10,
  max: 9999
},
departs: {
  type: Date
},
});

const Flight = model('Flight', flightSchema);

module.exports = Flight;