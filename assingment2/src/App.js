import './App.css';
import  {useState} from 'react';
import Header from './components/Header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';
import AddPlantForm from './components/AddPlantForm';

function App() {
  
  const [plants, setPlants]= useState([]);
  const [showForm, setShowForm] = useState(false);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  return (
   <div className='App'> 
    <Header onOpenForm={() => setShowForm(true)} />

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
