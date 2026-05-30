function PlantCard() {
  return (
    <div className="PlantCard">
        <div>
        <div className = "plant-card-header">
        <h1>plant name</h1>
        <button>settings </button>  
        </div>
        
        <p>plant species</p>
        <img className="plant-image" src="/plant.jpg" alt="Plant" />
        <div className = "plant-card-footer">
            <p>urgency status</p>
            <button>water plant</button>
        </div>
        </div>
    



    </div>
  );
}

export default PlantCard;