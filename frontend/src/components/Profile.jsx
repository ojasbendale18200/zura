import React from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import User from "./User";
import HomeLogo from "./svg/HomeLogo";

function Profile() {
  const breadcrumbs = [
    { label: <HomeLogo height={30} width={30} color={"#7E22CE"} />, href: "/" },
    { label: "Account Settings" },
  ];
  return (
    <>
      <div className="flex">
        <div className="w-[25%]">
          <Sidebar />
        </div>
        <div className="w-[80%] px-14 py-12">
          <Nav breadcrumbs={breadcrumbs} />

          <User />
        </div>
      </div>
    </>
  );
}

export default Profile;
