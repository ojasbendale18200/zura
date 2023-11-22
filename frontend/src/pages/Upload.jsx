import React, { useEffect, useState } from "react";
import axios_create from "../utils/axios_instance";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import Project from "../components/Project";
import HomeLogo from "../components/svg/HomeLogo";

function Upload() {
  const [loading, setLoading] = useState(false);
  const [episodeData, setEpisodeData] = useState([]);
  const breadcrumbs = [
    { label: <HomeLogo height={30} width={30} color={"#7E22CE"} />, href: "/" },
    { label: "Sample Project" },
    { label: "Upload", href: "/upload" },
  ];

  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");

  const getProjectEpisode = async (projectId) => {
    try {
      setLoading(true);
      const res = await axios_create.get(`/project/episode/${projectId}`);
      console.log("first", res.data.data);
      setLoading(false);
      setEpisodeData(res?.data?.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectEpisode(projectId);
  }, []);
  return (
    <div className="flex">
      <div className="w-[25%]">
        <Sidebar
          loading={loading}
          projectName={episodeData[0]?.project?.projectName}
        />
      </div>

      <div className="w-[80%] px-14 py-12">
        <Nav breadcrumbs={breadcrumbs} />

        <Project />
      </div>
    </div>
  );
}

export default Upload;
