// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';

function Dashboard() {
  const [buses, setBuses] = useState([]);
  const [center, setCenter] = useState([28.6139, 77.2090]); // Default to Delhi coordinates

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/buses');
        setBuses(response.data);
      } catch (err) {
        console.error('Error fetching buses:', err);
      }
    };

    fetchBuses();

    // Update bus locations every 10 seconds
    const interval = setInterval(fetchBuses, 10000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div>
      <h2>Live Bus Locations</h2>
      <MapContainer center={center} zoom={13} style={{ width: '100%', height: '500px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {buses.map((bus) => (
          <Marker key={bus._id} position={[bus.latitude, bus.longitude]} icon={new L.Icon({ iconUrl: 'https://iconarchive.com/download/i10747/google/noto-emoji-animals-nature/22215-bus.ico' })}>
            <Popup>
              <strong>Bus ID:</strong> {bus.busId}<br />
              <strong>Last Updated:</strong> {new Date(bus.lastUpdated).toLocaleString()}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Dashboard;
