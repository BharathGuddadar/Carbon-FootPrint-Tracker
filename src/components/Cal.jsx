import React, { useState } from 'react';
import '../App.css';

function CarbonFootprintTracker() {
  // State to manage form inputs and result
  const [transport, setTransport] = useState('');
  const [energy, setEnergy] = useState('');
  const [diet, setDiet] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Carbon emissions factors
    const transportFactor = 0.12; // kg CO2 per km
    const energyFactor = 0.5;    // kg CO2 per kWh

    // Calculate carbon footprint
    const footprint =
      (parseFloat(transport) * transportFactor) +
      (parseFloat(energy) * energyFactor) +
      parseFloat(diet);

    // Update result state
    setCarbonFootprint(footprint.toFixed(2));
  };

  return (
    <div className="mainvontainer">
      <div className="container2">
      <h2>Carbon Footprint Tracker</h2>
      <form onSubmit={handleSubmit}>
        <label>Transport (km per day):</label>
        <input
          type="number"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          min="0"
          required
        />

        <label>Energy Usage (kWh per day):</label>
        <input
          type="number"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
          min="0"
          required
        />

        <label>Diet (meat-heavy: 1, balanced: 0.5, vegetarian: 0.3):</label>
        <input
          type="number"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          step="0.1"
          min="0"
          max="1"
          required
        />

        <button type="submit">Calculate Footprint</button>
      </form>

      {carbonFootprint !== null && (
        <div className="result">
          <h2>Your Daily Carbon Footprint:</h2>
          <p>{carbonFootprint} kg CO₂</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default CarbonFootprintTracker;
