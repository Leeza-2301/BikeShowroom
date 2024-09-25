const express = require('express');
const router = express.Router();
const Bike = require('../models/bike');
const Razorpay = require('razorpay');

// Get all bikes
router.get('/bikes', async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.json(bikes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Get a specific bike by ID
router.get('/bikes/:id', async (req, res) => {
  const bikeId = req.params.id;
  try {
    const bike = await Bike.findById(bikeId);
    if (!bike) res.status(404).json({ error: 'Bike not found' });
    else res.json(bike);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.put('/bikes/:id', async (req, res) => {
  const bikeId = req.params.id;
  const updatedBike = req.body;

  try {
    const bike = await Bike.findByIdAndUpdate(bikeId, updatedBike, { new: true });
    if (!bike) res.status(404).json({ error: 'Bike not found' });
    else res.json(bike);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


//Delete a bike
router.delete('/bikes/:id', async (req,res) => {
  const bikeId = req.params.id;

  try{
    await Bike.findByIdAndDelete(bikeId);
    res.status(200).json({ message: 'Bike deleted successfully' });
  } catch(error) {
    console.error(error);
    res.status(500).json({error: 'An error occured'});
  }
})

// Create a new bike
router.post('/bikes', async (req, res) => {
  try {
    const { brand, model, price, mileage, weight, EngineCapacity, FuelTankCapacity, SeatHeight, imageblack, imagered, imageblue, image1, image2, image3 } = req.body;

    const newBike = new Bike({
      brand,
      model,
      price,
      mileage,
      weight,
      EngineCapacity,
      FuelTankCapacity,
      SeatHeight,
      imageblack,
      imagered,
      imageblue,
      image1,
      image2,
      image3,
    });

    await newBike.save();

    res.status(201).json(newBike);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


//Payment

const razorpay = new Razorpay({
  key_id:'rzp_test_8NRMErRVMXFiiA',
  key_secret:'0rKYqZY5b6FiDghcGMX1DARV',
});

router.post('/orders', async (req, res) => {
  try {
    const { amount } = req.body;

    const orderOptions = {
      amount, 
      currency: 'INR',
      receipt: 'order_rcptid_11',
      payment_capture: 1,
    };

    razorpay.orders.create(orderOptions, (error, order) => {
      if (error) {
        console.error('Error creating Razorpay order:', error);
        return res.status(500).json({ error: 'Error creating Razorpay order' });
      }

      res.json({
        orderId: order.id,
        options: {
          key: razorpay.key_id,
          amount: order.amount,
          currency: order.currency,
          order_id: order.id,
          name: 'RadiantRides',
          description: 'Payment for Bike Purchase',
          prefill: {
            name: 'User Name',
            email: 'user@example.com',
            contact: '9876543210',
          },
          theme: {
            color: '#F37254',
          },
          callback_url: "https://radiantrides-backend.onrender.com/api/success", // Update the server-side route
 // Redirect to the success page
        },
      });
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ error: 'Error creating Razorpay order' });
  }
});


router.post('/success', (req, res) => {
  //res.json({ message: 'Payment successful! Redirect to success page.' });
  res.redirect('https://radiant-rides.vercel.app/#/success'); 
});



module.exports = router;
