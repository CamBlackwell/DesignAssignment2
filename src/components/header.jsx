import { CiCirclePlus, CiSettings } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";


function Header({ onOpenForm }) {
  return (
    <div className="header-box">
      <h1>WATER PLANT</h1>

      <div className="header-buttons-group">
        <button className="header-buttons"> Info <IoIosInformationCircleOutline /></button>
        <button className="header-buttons"> Settings <CiSettings /></button>
        <button className="header-buttons"> Water Multiple Plants <FaList /></button>
        <button className="header-buttons"> Edit Plants <PiPlant /></button>

        <button className="header-buttons" onClick={() =>
          onOpenForm({})
        }
        >Add Plant <CiCirclePlus /> </button>
      </div>


    </div>
  );
}

export default Header;
