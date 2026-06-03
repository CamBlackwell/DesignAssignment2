import './App.css';
import { useState } from 'react';
import Header from './components/header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';
import AddPlantForm from './components/AddPlantForm';
import Dashboard from './components/Dashboard';

function App() {

  const [plants, setPlants] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);

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
          />
        ))}
      </CardContainer>

    </div>

  );
}

export default App;
