const express = require('express');
const router = express.Router();

// Mock bus data, replace this with your model and database logic
const buses = [
  { id: 1, busNo: 'A101', location: 'Campus Gate' },
  { id: 2, busNo: 'B202', location: 'Main Entrance' },
];

// Get all buses
router.get('/', (req, res) => {
  res.json(buses);
});

// Get bus by ID
router.get('/:id', (req, res) => {
  const bus = buses.find(b => b.id === parseInt(req.params.id));
  if (bus) {
    res.json(bus);
  } else {
    res.status(404).json({ message: 'Bus not found' });
  }
});

// Update bus location
router.put('/:id', (req, res) => {
  const bus = buses.find(b => b.id === parseInt(req.params.id));
  if (bus) {
    bus.location = req.body.location || bus.location;
    res.json(bus);
  } else {
    res.status(404).json({ message: 'Bus not found' });
  }
});

module.exports = router;
