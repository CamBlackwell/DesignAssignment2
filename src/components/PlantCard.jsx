import { FiEdit } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { IoIosWater } from "react-icons/io";

function getUrgencyColour(daysUntilWater) {
  if (daysUntilWater < 1) return '#8B0000';
  if (daysUntilWater == 1) return '#FCA311';
  return '#478978';
}

function PlantCard({ id, name, species, urgency, lastWatered, currentDay, onWater }) {
  const daysUntilWater = urgency + lastWatered - currentDay;
  return (
    <div className="PlantCard" style={{ backgroundColor: getUrgencyColour(daysUntilWater) }}>
      <div>
        <div className="plant-card-header">
          <h1 className="plant-card-title">
            <span className="plant-card-title-text">{name}</span>
            <p className="plant-card-species-bio">{species}</p>
          </h1>
          <div className="plant-card-top-buttons">
            <button className="plant-card-log-button"> <GoBook className="book-icon" />Log</button>
            <button className="plant-card-edit-button"><FiEdit className="edit-icon" />Edit</button>
          </div>
        </div>

        <img className="plant-image" src="/plant.jpg" alt="Plant" />
        <div className="plant-card-footer">
          <h3>{daysUntilWater} Days Until Water</h3>
          <button className="plant-card-water-button" onClick={() => onWater(id)}>WATER <IoIosWater /></button>
        </div>
      </div>

    </div >
  );
}

export default PlantCard;
