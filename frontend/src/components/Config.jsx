import React, { useState } from "react";
import BotIcon from "./svg/BotIcon";

function Config() {
  const [activeSubTab, setActiveSubTab] = useState("subTab1");

  const [formData, setFormData] = useState({
    chatbotName: "",
    welcomeMessage: "",
    inputPlaceholder: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data :", formData);
    setActiveSubTab("subTab2");
  };
  return (
    <div className="pt-6">
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap ">
          <li
            onClick={() => setActiveSubTab("subTab1")}
            class="me-2 cursor-pointer "
          >
            <div
              class={
                activeSubTab == "subTab1"
                  ? " text-purple-700 border-purple-500 text-base font-bold inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-purple-600 hover:border-purple-400 dark:hover:text-gray-300"
                  : "  text-base inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-purple-600 hover:border-purple-400 dark:hover:text-gray-300"
              }
            >
              General
            </div>
          </li>
          <li
            onClick={() => setActiveSubTab("subTab2")}
            class="me-2 cursor-pointer"
          >
            <div
              class={
                activeSubTab == "subTab2"
                  ? " text-purple-700 border-purple-500 text-base font-bold inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-purple-600 hover:border-purple-400 dark:hover:text-gray-300"
                  : "  text-base inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-purple-600 hover:border-purple-400 dark:hover:text-gray-300"
              }
              aria-current="page"
            >
              Display
            </div>
          </li>
          <li
            onClick={() => setActiveSubTab("subTab3")}
            class="me-2 cursor-pointer"
          >
            <div
              class={
                activeSubTab == "subTab3"
                  ? " text-purple-700 border-purple-500 text-base font-bold inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-purple-600 hover:border-purple-400 dark:hover:text-gray-300"
                  : "  text-base inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-purple-600 hover:border-purple-400 dark:hover:text-gray-300"
              }
            >
              Advanced
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-6 ">
        {activeSubTab == "subTab1" ? (
          <div>
            <form onSubmit={handleSubmit}>
              <div class="mb-6">
                <label
                  for="large-input"
                  class="block mb-2 text-lg font-semibold text-black"
                >
                  Chatbot Name
                </label>
                <input
                  type="text"
                  name="chatbotName"
                  onChange={handleInputChange}
                  class="block w-full p-2 outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
                />
                <p className="text-gray-700 font-roboto text-base font-normal">
                  please enter chatbot name
                </p>
              </div>
              <div class="mb-6">
                <label
                  for="base-input"
                  class="block mb-2 text-lg  text-black  font-semibold"
                >
                  Welcome Message
                </label>
                <input
                  type="text"
                  name="welcomeMessage"
                  onChange={handleInputChange}
                  class="block w-full p-2 outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-gray-700 font-roboto text-base font-normal">
                  please enter welcome messsage
                </p>
              </div>
              <div class="mb-6">
                <label
                  for="small-input"
                  class="block mb-2 text-lg text-black  font-semibold"
                >
                  Input Placeholder
                </label>
                <input
                  type="text"
                  name="inputPlaceholder"
                  onChange={handleInputChange}
                  class="block w-full p-2 outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-100 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-gray-700 font-roboto text-base font-normal">
                  please enter input Placeholder
                </p>
                <div className="mt-6    flex justify-end">
                  <input
                    className="bg-purple-700 px-4 py-2 cursor-pointer text-white font-semibold rounded-lg "
                    type="submit"
                    value="Next"
                  />
                </div>
              </div>
            </form>
          </div>
        ) : activeSubTab == "subTab2" ? (
          <div>
            <form onSubmit={handleSubmit} className="pb-8">
              <div className="grid grid-cols-2 gap-x-36 gap-y-8 border-b-2 border-gray-300 pb-4">
                <div className="">
                  <label class="block mb-2 text-lg font-semibold text-black">
                    Primary Color
                  </label>
                  <div className="flex justify-between">
                    <input
                      type="text"
                      name="primaryColor"
                      placeholder="#7BD568"
                      onChange={handleInputChange}
                      className=" w-4/5 border-2 text-gray-800 font-roboto text-m font-normal border-gray-400 h-10 rounded-lg pl-4"
                    />
                    <p className=" bg-green-300 rounded-lg  w-10 h-10 border-2 border-gray-400"></p>
                  </div>
                  <p className="text-xs text-gray-400">
                    this field is required
                  </p>
                </div>
                <div>
                  <label class="block mb-2 text-lg  text-gray-900  font-semibold">
                    Font Color
                  </label>
                  <div className="flex justify-between">
                    <input
                      type="text"
                      name="primaryColor"
                      onChange={handleInputChange}
                      placeholder="#3C3C3C"
                      className="w-4/5 border-2 text-gray-800 font-roboto text-m font-normal border-gray-400 h-10 rounded-lg pl-4"
                    />
                    <p className=" bg-gray-800 rounded-lg  w-10 h-10 border-2 border-gray-400"></p>
                  </div>
                  <p className="text-xs text-gray-400">
                    this field is required
                  </p>
                </div>
                <div>
                  <label class="block mb-2 text-lg  text-gray-900   font-semibold">
                    Font Size (in px)
                  </label>
                  <input
                    type="text"
                    name="primaryColor"
                    placeholder="25"
                    onChange={handleInputChange}
                    className=" w-full border-2 text-gray-800 font-roboto text-m font-normal border-gray-400 h-10 rounded-lg pl-4"
                  />
                  <p className="text-xs text-gray-400">
                    this field is required
                  </p>
                </div>
                <div>
                  <label class="block mb-2 text-lg  text-gray-900   font-semibold">
                    Chat Height (in % of total screen)
                  </label>
                  <input
                    type="text"
                    name="primaryColor"
                    onChange={handleInputChange}
                    placeholder="Lorem ipsuim "
                    className="w-full border-2 text-gray-800 font-roboto text-m font-normal border-gray-400 h-10 rounded-lg pl-4"
                  />
                  <p className="text-xs text-gray-400">
                    this field is required
                  </p>
                </div>
                <div className="text-lg font-semibold">
                  Show Sources{" "}
                  <p className="text-xs text-gray-400">
                    this field is required
                  </p>
                </div>
                <div className="flex justify-end">
                  <div>
                    <label class="relative inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" class="sr-only peer" />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </form>

            <form onSubmit={handleSubmit} className="pb-8">
              <div className="grid grid-cols-2 gap-x-36 gap-y-8 border-b-2 border-gray-300 pb-4">
                <div className="">
                  <label class="block mb-2 text-lg font-semibold text-black">
                    Chat Icon Size
                  </label>
                  <div className="flex justify-between">
                    <input
                      type="text"
                      name="primaryColor"
                      onChange={handleInputChange}
                      placeholder="Small (48x48 px)"
                      className=" w-4/5 border-2 text-gray-800 font-roboto text-m font-normal border-gray-400 h-10 rounded-lg pl-4"
                    />
                  </div>
                  <p className="text-xs text-gray-400">
                    this field is required
                  </p>
                </div>
                <div>
                  <label class="block mb-2 text-lg  text-gray-900  font-semibold">
                    Position on Screen
                  </label>
                  <div className="flex justify-between">
                    <input
                      type="text"
                      name="primaryColor"
                      onChange={handleInputChange}
                      placeholder="Bottom Right"
                      className="w-4/5 border-2 text-gray-800 font-roboto text-m font-normal border-gray-400 h-10 rounded-lg pl-4"
                    />
                  </div>
                  <p className="text-xs text-gray-400">
                    this field is required
                  </p>
                </div>
                <div>
                  <label class="block mb-2 text-lg  text-gray-900   font-semibold">
                    Distance from Bottom (in px)
                  </label>
                  <input
                    type="text"
                    name="primaryColor"
                    placeholder="20"
                    onChange={handleInputChange}
                    className=" w-4/5 border-2 text-gray-800 font-roboto text-m font-normal border-gray-400 h-10 rounded-lg pl-4"
                  />
                  <p className="text-xs text-gray-400">
                    this field is required
                  </p>
                </div>
                <div>
                  <label class="block mb-2 text-lg  text-gray-900   font-semibold">
                    Horizontal Distance (in px)
                  </label>
                  <input
                    type="text"
                    name="primaryColor"
                    placeholder="20"
                    onChange={handleInputChange}
                    className="w-4/5 border-2 text-gray-800 font-roboto text-m font-normal border-gray-400 h-10 rounded-lg pl-4"
                  />
                  <p className="text-xs text-gray-400">
                    this field is required
                  </p>
                </div>
                <div>
                  <label class="block mb-2 text-lg  text-gray-900   font-semibold">
                    Bot Icon
                  </label>
                  <div className="flex items-center space-x-5">
                    <BotIcon />
                    <div className="w-[200px] h-[40px] rounded-lg bg-purple-800 flex space-x-3 items-center pl-10">
                      <p className="text-white font-roboto text-sm font-bold">
                        Upload Image
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 35 35"
                        fill="none"
                      >
                        <path
                          d="M16.0417 23.3333V11.4479L12.25 15.2396L10.2084 13.125L17.5 5.83334L24.7917 13.125L22.75 15.2396L18.9584 11.4479V23.3333H16.0417ZM8.75004 29.1667C7.94796 29.1667 7.26108 28.8808 6.68942 28.3092C6.11775 27.7375 5.8324 27.0511 5.83338 26.25V21.875H8.75004V26.25H26.25V21.875H29.1667V26.25C29.1667 27.0521 28.8809 27.739 28.3092 28.3106C27.7375 28.8823 27.0512 29.1677 26.25 29.1667H8.75004Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : activeSubTab == "subTab3" ? (
          <div>advanced</div>
        ) : null}
      </div>
    </div>
  );
}

export default Config;
