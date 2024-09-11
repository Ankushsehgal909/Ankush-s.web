import React from "react";
import "../Components/Global.css";
import { projectsData } from "../data/data.json";

const Projects = ({ bgcolor, darkmode }) => {
  return (
    <div className={` ${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
      <h1 className={`text-3xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>Projects</h1>

      <div className="flex flex-col md:flex-row gap-5 flex-wrap my-5">
        {projectsData.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-5 shadow-md flex-1 min-w-[300px] md:min-w-[250px]">
            <a href={item.liveLink}>
              <div
                className={`ui-ux-design w-full flex flex-col gap-3 p-5 rounded-lg ${bgcolor === "white" ? "bg-[#FFF4F4] border-none" : "bg-black border border-[#A6A6A6]"}`}
              >
                <img
                  src={item.imageUrl}
                  className="rounded-lg transition delay-150 w-full object-cover"
                  alt={item.title}
                />
                <div>
                  <h1 className={`text-md font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>{item.title}</h1>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
