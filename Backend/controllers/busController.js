const Bus = require('../models/Bus');

// Get all buses
exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update bus location
exports.updateBusLocation = async (req, res) => {
  const { busId, latitude, longitude } = req.body;

  try {
    const bus = await Bus.findOneAndUpdate(
      { busId },
      { latitude, longitude, lastUpdated: new Date() },
      { new: true, upsert: true }
    );
    res.json(bus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
