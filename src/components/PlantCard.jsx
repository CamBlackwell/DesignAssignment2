function PlantCard({ name, species, urgency }) {
  return (
    <div className="PlantCard">
      <div>
        <div className="plant-card-header">
          <h1 className="plant-card-title">{name}
            <p className="plant-card-species-bio">{species}</p>
          </h1>
          <button className="plant-card-settings-button">...</button>
        </div>

        <img className="plant-image" src="/plant.jpg" alt="Plant" />
        <div className="plant-card-footer">
          <h3>Water in: {urgency} Days</h3>
          <button className="plant-card-water-button">WATER</button>
        </div>
      </div>

    </div>
  );
}

export default PlantCard;
