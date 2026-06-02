function PlantCard({ name, species, urgency }) {
  return (
    <div className="PlantCard">
      <div>
        <div className="plant-card-header">
          <h1 className="plant-card-title">{name}
            <p className="plant-card-species-bio">{species}</p>
          </h1>
          <button className="plant-card-settings-button">settings </button>
        </div>

        <img className="plant-image" src="/plant.jpg" alt="Plant" />
        <div className="plant-card-footer">
          <p>water every {urgency}</p>
          <button className="plant-card-water-button">water plant</button>
        </div>
      </div>

    </div>
  );
}

export default PlantCard;
