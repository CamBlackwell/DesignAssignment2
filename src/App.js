import './App.css';
import { useState } from 'react';
import Header from './components/header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';
import AddPlantForm from './components/AddPlantForm';
import Dashboard from './components/Dashboard';
//import TimeButton from './components/TimeButton';
import TimeButton from './components/TimeButtonForReal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  //console.warn("hello atart")
  //const [plants, setPlants]= useState([]);
  //const [showForm, setShowForm] = useState(false);

  const [plants, setPlants] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);

  const sortedPlants = [...plants].sort((a, b) => {
    const aDaysUntilWater = a.urgency + a.lastWatered - currentDay;
    const bDaysUntilWater = b.urgency + b.lastWatered - currentDay;
    return aDaysUntilWater - bDaysUntilWater;
  }
  );

  function waterPlant(id) {
    const plant = plants.find(p => p.id === id);
    if (!plant) return;
    const mostRecentlyWatered = plant.lastWatered;
    setPlants(plants.map(p => p.id === id ? { ...p, lastWatered: currentDay } : p));
    toast(
      ({ closeToast }) => (
        <div>
          <span>{plant.name} has been watered!</span>
          <button className='alert-undo-button' onClick={() => { undoWaterPlant(id, mostRecentlyWatered); closeToast(); }}>UNDO</button>
          <button className='alert-ok-button' onClick={closeToast}>OK</button>
        </div>
      ),
      { autoClose: 5000 }
    );
  }

  function undoWaterPlant(id, mostRecentlyWatered) {
    setPlants(plants.map(p => p.id === id ? { ...p, lastWatered: mostRecentlyWatered } : p));
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

      <TimeButton plants={plants} setPlants={setPlants} currentDay={currentDay} setCurrentDay={setCurrentDay} />

      <Dashboard
        PlantsData={plants} dashTime={currentDay}
      />

      {showForm && (
        <AddPlantForm
          onAddPlant={addPlant}
          onClose={() => setShowForm(false)}
        />
      )}

      <CardContainer>
        {sortedPlants.map((plant, index) => (
          <PlantCard
            key={plant.id}
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

      <ToastContainer
        position="bottom-right"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss
        rtl={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />

    </div >

  );
}

export default App;
