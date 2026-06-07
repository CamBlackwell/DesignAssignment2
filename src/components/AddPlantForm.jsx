import { useState } from "react";

function AddPlantForm({ onAddPlant, onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    urgency: "",
    id: "",
    lastWatered: "",
    needsWater: false,
    careHistory: []
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "urgency" && value !== "" ? Number(value) : value
    });

    function handleChange(e) {
      const { name, value } = e.target;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlant(formData);
    onClose();
  }

  return (
    <div className="AddPlantForm">
      <button className="AddPlantForm-cancel" type="button" onClick={onClose}>
        Cancel
      </button>
      <form onSubmit={handleSubmit}>
        <h2>Add Plant</h2>

        <h4> Add name </h4>
        <input
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />

        <h4> Select Species </h4>
        <select name="species" value={formData.species}
          onChange={handleChange} required>
          <option value="">Select species</option>
          <option value="Pothos">Pothos</option>
          <option value="Snake Plant">Snake Plant</option>
          <option value="Fiddle Leaf Fig">Fiddle Leaf Fig</option>
          <option value="Peace Lilly">Peacy Lilly</option>
          <option value="Monstera deliciosa">Monstera deliciosa</option>
          <option value="Succulent / cactus ">Succulent / cactus </option>
          <option value="Basil">Basil</option>
        </select>


        <h4> Select Watering Frequency </h4>
        <select
          name="urgency" value={formData.urgency} onChange={handleChange} required>
          <option value="">Watering Frequency</option>
          <option value="1">Every Day</option>
          <option value="3">2-3 Days</option>
          <option value="7">5-7 Days</option>
          <option value="10">7-10 Days</option>
          <option value="14">7-14 Days</option>
          <option value="21">14-21 Days</option>
          <option value="30">21-30 Days</option>
        </select>


        <button className="AddPlantForm-confirm" type="submit">Create Plant</button>

      </form>
    </div>
  );
}
export default AddPlantForm;
