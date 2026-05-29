import './App.css';
import Header from './components/Header';
import PlantCard from './components/PlantCard';
import CardContainer from './components/CardContainer';

function App() {
  return (

   <div className='App'> 
    <Header />
    <CardContainer>
      <PlantCard />
      <PlantCard />
      <PlantCard />
      <PlantCard />
    
    </CardContainer>
   
    
    


   </div>
      
  
    
  );
}

export default App;
