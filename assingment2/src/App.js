import './App.css';
import react, {use, useState} from 'react';
import Header from './components/Header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';

function App() {

  
  const [plants, setPlants]= useState([]);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  return (

   <div className='App'> 
    <Header onAddplant = {addPlant}/>
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
