import React, { useEffect, useState } from "react";
import UserLogo from "./svg/UserLogo";
import Logo from "./svg/Logo";
import axios_create from "../utils/axios_instance";
import { useToast } from "@chakra-ui/react";

function User() {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  let userId = JSON.parse(localStorage.getItem("userInfo"));
  const toast = useToast();

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await axios_create.get(`/user/${userId._id}`);

      setLoading(false);
      setUser(res?.data?.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    const data = {
      username: user.username,
      email: user.email,
    };
    try {
      const res = await axios_create.patch(`/user/${userId._id}`, data);
      if (res.status === 201) {
        toast({
          title: res.data.status,
          description: "success",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      } else {
        toast({
          title: "error",
          description: "error",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }

      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1 className="text-purple-700 font-roboto text-5xl font-bold mt-5">
        Account Settings
      </h1>

      <div className="flex justify-between mt-10 items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/caa8/f4ed/231db19d5444bd9c07e6c0a7c6416b96?Expires=1701648000&Signature=pHoiCaCMjLMstFelCBeigYp1XtnxNVR6WkPaD0w~JS89CukhkA1OjvNq-B1Aat6V9f9Wog0vpSlnZpCbosdwp1Fh5c8ZHVG53aP~s~U7o0HDr0lJJRgmLn98d5JHnBnAWPhFBnShHh-WM1TeMSupajpOdIQCCUjaEfe~XaLANAXEjBjkj0qXrKi02au5XF5CAL8OX7WDgSt6H4Yth9lGKHE0o2jvMkTObVxnTQUGe8EiRUC~H4uIg4T2RyivUH5LBupY~YAHE7Iexv~ltnYm9A2Ft428I8S1YiUAXeudyUbGKvoY9k3PcCFLBDdTge1mQE51oMz86TgNmEPgU3Sd9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          height={100}
          width={150}
          alt="profile"
          className="rounded-full"
        />

        <div className=" flex flex-col items-start gap-2 ">
          <label className="text-gray-700 font-roboto text-2xl font-bold">
            User Name
          </label>
          <input
            className="rounded-lg border border-gray-300 bg-white p-4 w-[300px] h-[41px]"
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 font-roboto text-2xl font-bold">
            {" "}
            Email
          </label>
          <input
            className="rounded-lg border border-gray-300 bg-white p-4 w-[300px] h-[41px]"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleUpdate}
          className="w-[120px] h-[50px] text-white bg-purple-600 rounded-xl  text-center font-roboto text-base font-bold leading-8 tracking-tighter "
        >
          Update
        </button>
      </div>

      <h1 className="text-purple-700 font-roboto text-5xl font-bold leading-normal mt-11">
        Subscription
      </h1>

      <div className="w-[996px] h-[94px] rounded-lg border border-purple-700 bg-gradient-to-r from-purple-700 via-purple-700 to-purple-700 shadow-2xl items-center mt-6 ">
        <div className="w-[900px] flex justify-between items-center mt-6 ml-8">
          <p className="text-white font-roboto text-xl font-normal leading-normal">
            You are currently on the{" "}
            <span className="text-white font-roboto text-xl font-bold underline leading-normal">
              Ques AI Basic Plan!
            </span>
          </p>
          <button className="w-[120px] h-[50px] text-purple-700 bg-white rounded-xl  text-center font-roboto text-base font-bold leading-8 tracking-tighter ">
            Upgrade
          </button>
        </div>
      </div>
      <div className="text-pink-500 text-start font-roboto text-base font-bold leading-8 tracking-tighter underline mt-3 w-[200px]">
        Cancel Subscription
      </div>
    </>
  );
}

export default User;
