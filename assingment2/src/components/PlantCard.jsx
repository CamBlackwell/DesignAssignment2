function PlantCard({name, species, urgency}) {
  return (
    <div className="PlantCard">
        <div>
        <div className = "plant-card-header">
        <h1>{name}</h1>
        <button>settings </button>  
        </div>
        
        <p>{species}</p>
        <img className="plant-image" src="/plant.jpg" alt="Plant" />
        <div className = "plant-card-footer">
            <p>{urgency}</p>
            <button>water plant</button>
        </div>
        </div>
    
    </div>
  );
}

export default PlantCard;