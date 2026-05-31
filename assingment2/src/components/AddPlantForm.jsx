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



        <select name="urgency" value={formData.urgency}
          onChange={handleChange} required>
  <option value="">Watering Frequency</option>
<option value="Everyday">Every Day</option>
<option value="2-3 Days">2-3 Days</option>
<option value="5-7 Days">5-7 Days</option>
<option value="7-10 Days">7-10 Days</option>
<option value="7-14 Days">7-14 Days</option>
<option value="14-21 Days">14-21 Days</option>
<option value="21-30 Days">21-30 Days</option>
</select>


        <button type="submit">Create Plant</button>

        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddPlantForm