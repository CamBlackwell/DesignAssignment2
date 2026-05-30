import './App.css';
import Header from './components/Header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';

function App() {
  return (

   <div className='App'> 
    <Header />
    <CardContainer>
      <PlantCard 
  name="Aloe Vera" 
  species="Succulent" 
  urgency="Water today" 
/>
    <PlantCard 
  name="Jamal" 
  species="Aloe Vera" 
  urgency="4 days time" 
/>
    </CardContainer>

   </div>
      
  );
}

export default App;
