import React from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Config from "./Config";
import HomeLogo from "./svg/HomeLogo";

function Widget() {
  const breadcrumbs = [
    { label: <HomeLogo height={30} width={30} color={"#7E22CE"} />, href: "/" },
    { label: "Sample Project" },
    { label: "Widjet Configuration", href: "/upload" },
  ];
  return (
    <>
      <div className="flex">
        <div className="w-[25%]">
          <Sidebar />
        </div>
        <div className="w-[80%] px-14 py-12">
          <Nav breadcrumbs={breadcrumbs} />

          <Config />
        </div>
      </div>
    </>
  );
}

export default Widget;
