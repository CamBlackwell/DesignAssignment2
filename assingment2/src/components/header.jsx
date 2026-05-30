function Header({onAddplant}) {
  return (
    <div className="header-box">
        <h1>WATER PLANT</h1>

        <button className="Add-plant" onClick={() =>
          onAddplant({
            name: "Aloe Vera",
            species: "Succulent",
            urgency: "Needs water"
          })
        }
 >Add Plant ⊕ </button>

  
    </div>
  );
}

export default Header;