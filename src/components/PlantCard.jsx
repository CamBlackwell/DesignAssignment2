import { useState, useRef, useEffect } from 'react';
import { FiEdit } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { IoIosWater, IoMdTrash } from "react-icons/io";
import { PiPottedPlantFill } from "react-icons/pi";

function getUrgencyColour(daysUntilWater) {
  if (daysUntilWater < 1) return '#8B0000';
  if (daysUntilWater == 1) return '#FCA311';
  return '#478978';
}

function PlantCard({ id, name, species, urgency, lastWatered, currentDay, onWater, careHistory, onAddCareHistory }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [logOpen, setLogOpen] = useState(false);
  const [careNote, setCareNote] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


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
            <button className="plant-card-log-button" onClick={() => setLogOpen(true)}>
            <GoBook className="book-icon" />Log
            </button>

            <div className="plant-card-dropdown-wrapper" ref={dropdownRef}>
              <button
                className="plant-card-edit-button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FiEdit className="edit-icon" />Edit
              </button>

              {dropdownOpen && (
                <div className="plant-card-dropdown-menu">
                  <button className="edit-plant-info-dropdown "><PiPottedPlantFill /> Edit Plant Info</button>
                  <button className="delete-plant-dropdown"><IoMdTrash /> Delete Plant</button>
                </div>
              )}

                            {logOpen && (
                <div className="care-log-overlay">
                  <div className="care-log-popup">
                    <h2> {name} care log</h2>

                    {careHistory && careHistory.length > 0 ? (
                      careHistory.map((entry, index) => (
                        <div key={index} className="care-log-entry">
                          <p><strong>Day:</strong> {entry.day}</p>
                          <p><strong>Note:</strong> {entry.note}</p>
                        </div>
                      ))
                    ) : (
                      <p>No care history yet.</p>
                    )}

                    <input
                        type="text"
                        value={careNote}
                        onChange={(e) => setCareNote(e.target.value)}
                        placeholder="Describe care"
                      />

                      <button
                    onClick={() => {
                      if (careNote.trim() === "") return;
                      onAddCareHistory(id, careNote + " 🌿");
                      setCareNote("");
                    }}
                  >
                    
                        Add Note
                      </button>

                    <button onClick={() => setLogOpen(false)}>Close</button>
                  </div>
                </div>
              )}

            </div>

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
