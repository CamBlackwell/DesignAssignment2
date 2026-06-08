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

  const [plants, setPlants] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);

  // sorts the plants and resets when a plant has been watered
  const sortedPlants = [...plants].sort((a, b) => {
    const aDaysUntilWater = a.urgency + a.lastWatered - currentDay;
    const bDaysUntilWater = b.urgency + b.lastWatered - currentDay;
    return aDaysUntilWater - bDaysUntilWater;
  }
  );

  //Function for when the water plant button is pressed, will change only the single plant
  function waterPlant(id) {
    const plant = plants.find(p => p.id === id);
    if (!plant) return;
    const mostRecentlyWatered = plant.lastWatered;
    setPlants(plants.map(p => p.id === id ? { ...p, lastWatered: currentDay, needsWater: false, careHistory: [...(p.careHistory || []), { day: currentDay, note: "Watered plant 💧" }] } : p));

    //creates an popup with an undo feature
    toast(
      ({ closeToast }) => (
        <div>
          <button className='alert-undo-button' onClick={() => { undoWaterPlant(id, mostRecentlyWatered); closeToast(); }}>UNDO</button>
          <span>{plant.name} watered!</span>
        </div>
      ),
      { autoClose: 8000 }
    );
  }

  //undo feature of the popup
  function undoWaterPlant(id, mostRecentlyWatered) {
    setPlants(plants.map(p => p.id === id ? { ...p, lastWatered: mostRecentlyWatered } : p));
  }

  //adds plant
  function addPlant(newPlant) {
    setPlants([...plants, { ...newPlant, id: Date.now(), lastWatered: currentDay }]);
  }

  //old code for demo time pass
  // function passTime(plants) {
  //   setCurrentDay(currentDate => currentDate + 1);
  // }

  //for adding changes to the care history
  function addCareHistory(id, note) {
    setPlants(plants.map(p =>
      p.id === id
        ? {
          ...p,
          careHistory: [
            ...(p.careHistory || []),
            { day: currentDay, note: note }
          ]
        }
        : p
    ));
  }

  return (
    <div className='App'>
      <Header onOpenForm={() => setShowForm(true)} />

      {/* for demo time passing */}
      <TimeButton plants={plants} setPlants={setPlants} currentDay={currentDay} setCurrentDay={setCurrentDay} />

      <Dashboard
        PlantsData={plants} dashTime={currentDay}
      />

      {/* shows the add plant popup section */}
      {showForm && (
        <AddPlantForm
          onAddPlant={addPlant}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* for the cards, shows the sorted version from most urgent watering to least urgent */}
      <CardContainer>
        {sortedPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            id={plant.id}
            name={plant.name}
            species={plant.species}
            urgency={plant.urgency}
            lastWatered={plant.lastWatered}
            currentDay={currentDay}
            onWater={waterPlant}
            careHistory={plant.careHistory}
            onAddCareHistory={addCareHistory}
            photo={plant.photo}
          />
        ))}
      </CardContainer>

      {/* popup design - reccomended from react-toastify website */}
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
