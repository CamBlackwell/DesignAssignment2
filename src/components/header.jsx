import { CiCirclePlus, CiSettings } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";


function Header({ onOpenForm }) {
  return (
    <div className="header-box">
      <h1>WATER PLANT</h1>

      <button> Info <IoIosInformationCircleOutline /></button>
      <button> Water Multiple <FaList /></button>
      <button> Edit Plants <PiPlant /></button>
      <button> Settings <CiSettings /></button>

      <button className="Add-plant" onClick={() =>
        onOpenForm({})
      }
      >Add Plant <CiCirclePlus /> </button>


    </div>
  );
}

export default Header;
