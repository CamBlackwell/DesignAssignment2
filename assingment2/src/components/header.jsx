function Header({onOpenForm}) {
  return (
    <div className="header-box">
        <h1>WATER PLANT</h1>

        <button className="Add-plant" onClick={() =>
          onOpenForm({})
        }
 >Add Plant ⊕ </button>

  
    </div>
  );
}

export default Header;