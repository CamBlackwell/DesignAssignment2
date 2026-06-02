import './App.css';
import  {useState} from 'react';
import Header from './components/header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';
import AddPlantForm from './components/AddPlantForm';
import Dashboard from './components/Dashboard';
import TimeButton from './components/TimeButton';


function App() {
  
  const [plants, setPlants]= useState([]);
  const [showForm, setShowForm] = useState(false);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

 

  return (
   <div className='App'> 
   
    <Header onOpenForm={() => setShowForm(true)} />

    <TimeButton
      newPlantCheck = {plants.urgency}
    />


    <Dashboard totalPlants = {plants.length} />

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
