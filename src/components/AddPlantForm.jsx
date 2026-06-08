import { useState } from "react";

function AddPlantForm({ onAddPlant, onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    urgency: "",
    id: "",
    lastWatered: "",
    needsWater: false,
    careHistory: [],
    photo: ""
  });
  const [errors, setErrors] = useState({ name: "" });

  // updates formData state whenever an input/select changes. It clears any error for that field if one exists, and converts the urgency value to a number
  function handleChange(e) {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }

    setFormData({
      ...formData,
      [name]: name === "urgency" && value !== "" ? Number(value) : value
    });
  }

  //to deal with adding a custom photo
  function handlePhotoChange(e) {
    const photo = e.target.files[0];
    if (!photo) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData(prev => ({ ...prev, photo: event.target.result }));
    };
    reader.readAsDataURL(photo);
  }
  //handles empty name, other select ones are already handled

  // Validates name is non-empty (species & urgency rely on the HTML required attribute on their <select> elements), then adds the plant and closes the form 
  function handleSubmit(e) {
    e.preventDefault();

    if (formData.name.trim() === "") {
      setErrors({ ...errors, name: "Plant name is required" });
      return;
    }


    onAddPlant(formData);
    onClose();
  }

  // comments not needed for this section as the blocks are the h4 titles
  return (
    <div className="AddPlantForm">
      <button className="AddPlantForm-cancel" type="button" onClick={onClose}>
        Cancel
      </button>
      <form onSubmit={handleSubmit}>
        <h2>Add Plant</h2>

        <h4> Add name </h4>
        <div>
          The plant's name is <input
            name="name"
            placeholder="Plant name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="add-plant-error-message">{errors.name}</p>}

        </div>

        <h4> Select Species </h4>
        <div>
          The plant's species is <select name="species" value={formData.species}
            onChange={handleChange} required>
            <option value="">Select species</option>
            <option value="Pothos">Pothos (7 - 30 days)</option>
            <option value="Snake Plant">Snake Plant (7 - 14 days)</option>
            <option value="Fiddle Leaf Fig">Fiddle Leaf Fig (7 - 10 days)</option>
            <option value="Peace Lilly">Peacy Lilly (4 - 12 days)</option>
            <option value="Monstera deliciosa">Monstera deliciosa (7 - 12 days)</option>
            <option value="Succulent / cactus ">Succulent / cactus (10 - 14 days)</option>
            <option value="Basil">Basil (2 - 4 days)</option>
          </select>
        </div>


        <h4> Select Watering Frequency </h4>
        <div> This plant needs to be watered every <select
          name="urgency" value={formData.urgency} onChange={handleChange} required>
          <option value="">Select watering frequency</option>
          {Array.from({ length: 100 }, (_, i) => {
            const days = i + 1;
            return (
              <option key={days} value={days}>
                {days} {days === 1 ? "Day" : "Days"}
              </option>
            );
          })}
        </select>
        </div>

        <h4>Plant Photo (Will have a default if none available)</h4>
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
        {formData.photo && (
          <img src={formData.photo} alt="Preview" style={{ width: 100, height: 100, objectFit: 'cover' }} />
        )}


        <button className="AddPlantForm-confirm" type="submit">Create Plant</button>

      </form>
    </div>
  );
}
export default AddPlantForm;
