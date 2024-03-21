import React from "react";
import Button from "./Layout/Button";
import "../index.css";
import { Link } from "react-router-dom";
import { nameHanlder } from '../utils/projectUtils'
const Project = ({ project }) => {
  return (
    <div className="my-10 ">
      <div className="flex items-center mb-[-30px]" >
        <div className="w-[90px] h-[90px] lg:w-[90px] lg:h-[90px] flex justify-center items-center rounded-full dark:bg-lime-600 bg-red-600 text-white text-2xl font-bold ">
          {nameHanlder(project.name)}
        </div>
        <div>
          <h2 className="font-bold text-3xl ml-5 dark:text-lime-500  text-red-600 ">
            {project.name}
          </h2>
        </div>
      </div>
      <div className="bg-white rounded-xl border-gray-200 border-2 p-10 flex flex-col gap-5 justify-center items-center sm:justify-between sm:flex-row">
        <p className="flex-1  text-2xl font-semibold">{project.content}</p>
        <div className="text-nowrap">
          <Button><Link to={`/projects/${project.id}`}> 
          View 
          </Link></Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
