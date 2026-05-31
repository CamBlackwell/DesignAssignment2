import {useState} from "react";

function AddPlantForm({onAddPlant, onClose}) {

const [formData, setFormData] = useState({
    name: "",
    species: "",
    urgency: "",
});

function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
  e.preventDefault();

    onAddPlant(formData);
    onClose();
}

return (
    <div className = "AddPlantForm">
      <form onSubmit = {handleSubmit}>
        <h2>Add Plant</h2>

        <input
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="species"
          placeholder="Species"
          value={formData.species}
          onChange={handleChange}
        />

        <input
          name="urgency"
          placeholder="Urgency"
          value={formData.urgency}
          onChange={handleChange}
        />

        <button type="submit">Create Plant</button>

        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddPlantForm