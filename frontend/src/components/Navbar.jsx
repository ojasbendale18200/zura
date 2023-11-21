import React from "react";
import Logo from "./svg/Logo";
import Setting from "./svg/Setting";
import Notification from "./svg/Notification";

function Navbar() {
  return (
    <nav className="p-4">
      <div className="flex justify-between items-center ">
        <div className="flex items-start  ">
          <Logo width={45} height={41} />
          <p className="text-[#7E22CE] font-extrabold ml-2 text-3xl">LAMA.</p>
        </div>
        <div className="flex  justify-end items-end  px-6 gap-x-2">
          <Setting width={32} height={40} />
          <Notification width={40} height={40} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
