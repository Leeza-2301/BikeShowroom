
const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: String,
  mileage: Number,
  weight: Number,
  imageblack: String,
  imageblue: String,
  imagered: String,
  EngineCapacity: String,
  FuelTankCapacity: String,
  SeatHeight : Number,
  image1: String,
  image2: String,
  image3: String,
}, {
  collection: 'bikeDetails' 
});

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;
