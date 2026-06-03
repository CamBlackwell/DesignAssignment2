import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';
import AddPlantForm from './components/AddPlantForm';
import Dashboard from './components/Dashboard';

function App() {

  const [plants, setPlants] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);
  const [recentWateredAlert, setRecentWateredAlert] = useState(null);

  function waterPlant(id) {
    const plant = plants.find(p => p.id === id);
    if (!plant) return;
    const mostRecentlyWatered = plant.lastWatered;
    setPlants(plants.map(p => p.id === id ? { ...p, lastWatered: currentDay } : p));
    setRecentWateredAlert({ plantId: id, plantName: plant.name, mostRecentlyWatered });
  }

  function undoWaterPlant(id, mostRecentlyWatered) {
    setPlants(plants.map(p => p.id === id ? { ...p, lastWatered: mostRecentlyWatered } : p));
    setRecentWateredAlert(null);
  }

  function addPlant(newPlant) {
    setPlants([...plants, { ...newPlant, id: Date.now(), lastWatered: currentDay }]);
  }

  function passTime(plants) {
    setCurrentDay(currentDate => currentDate + 1);
  }

  return (
    <div className='App'>
      <Header onOpenForm={() => setShowForm(true)} />

      <Dashboard PlantsData={plants} />

      <button onClick={passTime}>
        <p>Time Pass (+1 day)</p>
      </button>

      {showForm && (
        <AddPlantForm
          onAddPlant={addPlant}
          onClose={() => setShowForm(false)}
        />
      )}

      <CardContainer>
        {plants.map((plant, index) => (
          <PlantCard
            key={index}
            id={plant.id}
            name={plant.name}
            species={plant.species}
            urgency={plant.urgency}
            lastWatered={plant.lastWatered}
            currentDay={currentDay}
            onWater={waterPlant}
          />
        ))}
      </CardContainer>

      {recentWateredAlert && (
        <div className="alert-popup">
          <button className="close-popup"> X</button>
          <p>You watered {recentWateredAlert.plantName}!</p>
          <div className="alert-undo-ok-section">
            <button className="alert-undo-button" onClick={() => undoWaterPlant(recentWateredAlert.plantId, recentWateredAlert.mostRecentlyWatered)}>Undo</button>
            <button className="alert-ok-button" onClick={() => setRecentWateredAlert(null)}>OK</button>
          </div>
        </div>
      )
      }

    </div >

  );
}

export default App;
