import './App.css';
import  {useState} from 'react';
import Header from './components/header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';
import AddPlantForm from './components/AddPlantForm';
import Dashboard from './components/Dashboard';

function App() {
  
  let time = 0;
  const [plants, setPlants]= useState([]);
  const [showForm, setShowForm] = useState(false);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function passTime(plants){
    time = time + 1
    //if (plants.ur && time == 2){
     // console.alert
    //}
  }

  return (
   <div className='App'> 
    <Header onOpenForm={() => setShowForm(true)} />

    <Dashboard totalPlants = {plants.length} />

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
    name={plant.name}
    species={plant.species}
    urgency={plant.urgency}
  />
))}
    </CardContainer>

   </div>
      
  );
}

export default App;
