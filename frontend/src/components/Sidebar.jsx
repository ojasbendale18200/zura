import React, { useEffect, useState } from "react";
import Setting from "./svg/Setting";
import Logo from "./svg/Logo";
import Loader from "./svg/Loader";
import { Link, useSearchParams } from "react-router-dom";

function Sidebar({ projectName, loading }) {
  const [activeTab, setActiveTab] = useState("projects");
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "projects",
      label: "Projects",
      href: `/upload?projectId=${projectId}`,
    },
    {
      id: "widget configuration",
      label: "Widget Configurations",
      href: `/widget/upload?projectId=${projectId}`,
    },
    { id: "deployment", label: "Deployment" },
    { id: "pricing", label: "Pricing" },
  ];

  const bottomTabs = [
    {
      id: "settings",
      label: "Settings",
      icon: <Setting width={30} height={20} />,
      href: `/profile/upload?projectId=${projectId}`,
    },
  ];
  return (
    <div className="bg-[#F3E8FF] rounded-2xl h-screen w-[20%]  p-4 fixed top-0 left-0 overflow-y-auto flex flex-col">
      {/* sidebar header */}
      <div className="py-2 px-4">
        <div className="flex items-start mb-6">
          <Logo width={35} height={35} />
          <p className="text-[#7E22CE] font-extrabold ml-2 text-2xl">LAMA.</p>
        </div>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <p className="text-black text-sm font-normal mb-2">{projectName}</p>
        )}
      </div>

      {/* tab section */}
      <ul className="text-white flex-1">
        {tabs.map((tab, index) => (
          <Link to={tab.href}>
            <li
              key={tab.id}
              className={`flex items-center p-3 font-semibold text-[#49454F] text-xs rounded-full cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#7E22CE] text-[#FFFF] rounded-full"
                  : "hover:bg-[#CAC4D0]"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <div
                className={`rounded-full text-xs h-7 w-7 flex items-center justify-center mr-3 font-semibold ${
                  activeTab === tab.id
                    ? "bg-[#211935] text-[#FFFF]"
                    : "bg-[#CAC4D0]"
                }`}
              >
                {index + 1}
              </div>
              {tab.label}
            </li>
          </Link>
        ))}
        <hr className="border-t-2 border-[#CAC4D0] my-4" />
      </ul>

      {/* bottom tab section */}
      <div>
        <ul className="text-white">
          <hr className="border-t-2 border-[#CAC4D0] mb-4" />
          {bottomTabs.map((tab) => (
            <Link to={tab.href}>
              <li
                key={tab.id}
                className={`flex items-center p-3 font-semibold text-[#49454F] text-sm rounded-full cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#7E22CE] text-[#FFFF] rounded-full"
                    : "hover:bg-[#CAC4D0] "
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                <div
                  className={`rounded-full text-sm h-8 w-8 flex items-center justify-center mr-3 font-semibold ${
                    activeTab === tab.id
                      ? "bg-[#211935] text-[#FFFF]"
                      : "bg-[#CAC4D0]"
                  }`}
                >
                  {tab.icon}
                </div>
                {tab.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
