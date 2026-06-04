import './App.css';
import { useState } from 'react';
import Header from './components/header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';
import AddPlantForm from './components/AddPlantForm';
import Dashboard from './components/Dashboard';
//import TimeButton from './components/TimeButton';
import TimeButton from './components/TimeButtonForReal';

function App() {
  
  let time = 0;
  //console.warn("hello atart")
  //const [plants, setPlants]= useState([]);
  //const [showForm, setShowForm] = useState(false);

  const [plants, setPlants] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);

  function waterPlant(id) {
    setPlants(plants.map(p => p.id === id ? { ...p, lastWatered: currentDay } : p));
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

    <TimeButton PlantWaterData={plants} time={time} />

   <Dashboard 
      PlantsData = {plants}  dashTime={time}  
    />

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

    </div>

  );
}

export default App;
