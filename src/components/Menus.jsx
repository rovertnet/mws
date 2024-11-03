
import { useState } from "react";
import logo from "../assets/mon_logo.png"


export default function Menus() {

  const [OpenMenu, setopenMenu] = useState(true);
  const dropDownOpen = () =>{
    setopenMenu(!OpenMenu)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center">
          <img src={logo} alt={logo} className="w-10 h-10" />
          <button></button>
        </div>
      </div>
    </>
  );
}
