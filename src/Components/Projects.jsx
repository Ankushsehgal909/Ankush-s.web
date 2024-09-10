import React from "react";
import "../Components/Global.css";
import {projectsData} from "../data/data.json"

const Projects = ({ bgcolor, darkmode }) => {
  return (
    <>
      {/* <div className="p-3"> */}
      <div className={` ${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
        <h1 className={`text-3xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>Projects</h1>

        <div className="flex gap-5 flex-wrap my-5">
          {projectsData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-5 shadow-md">

              <a href={item.liveLink}>
                <div
                  className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
                  style={{ background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}
                >
                  <img
                    src={item.imageUrl}
                    className="rounded-lg transition delay-150"
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
      {/* </div> */}
    </>
  );
};

export default Projects;
