import './App.css';
import  {useState} from 'react';
import Header from './components/header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';
import AddPlantForm from './components/AddPlantForm';
import Dashboard from './components/Dashboard';
import TimeButton from './components/TimeButtonForReal';

function App() {
  
  let time = 0;
  //console.warn("hello atart")
  const [plants, setPlants]= useState([]);
  const [showForm, setShowForm] = useState(false);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  //let test = Dashboard(plants,time);

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
