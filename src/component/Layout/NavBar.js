import React from "react";
import { Navbar, Nav } from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";
import "rsuite/dist/rsuite-no-reset.min.css";
import { NavLink } from "react-router-dom";
import Toggle from "react-toggle";
import { useDispatch, useSelector } from "react-redux";
import { changeDark } from "../store/ThemeSlice";
import { FaRegMoon } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa";
//import "@theme-toggles/react/css/[toggle name].css"
import { Classic } from "@theme-toggles/react"
import { Switch } from '@headlessui/react'

const NavBar = () => {
  const dark=useSelector(state=>state.theme.dark);
  const dispatch = useDispatch(); 
  return (
    <div className="dark:bg-black bg-red-700 flex items-center fixed z-10 top-0 left-0  w-full px-10 lg:px-[10%] text-white">
      <div className="logo cursor-pointer">
        <NavLink to="/projects">
          <h1 className="text-4xl px-2  font-bold border-l-white border-l-4 text-lime-500 ">
            Projects
          </h1>
        </NavLink>
      </div>
      <div className="navLinks flex-1">
        <ul className="flex justify-end items-center  ">
          <li className="text-2xl  cursor-pointer py-4 hover:dark:bg-lime-600 hover:bg-red-900">
            <NavLink
              className={({ isActive }) =>
                 isActive ? "py-4 px-2 dark:bg-lime-600 bg-red-900" : "py-4 px-2"
              }
              to="/projects"
            >Projects
            </NavLink>
          </li>
          <li className="text-2xl  cursor-pointer py-4 ml-2 hover:dark:bg-lime-600 hover:bg-red-900">
            <NavLink
              className={({ isActive }) =>
           isActive ? "py-4 px-2 dark:bg-lime-700 bg-red-900" : "py-4 px-2"
              }
              to="/NewProject"
            >New Project
            </NavLink>
          </li>
          <li className="text-2xl  cursor-pointer p-1 rounded-2xl ml-2 dark:bg-lime-600 bg-red-900">

          {/* <Classic toggled={useSelector(state=>state.theme.dark)} toggle={()=>dispatch(changeDark())} /> */}
          
          { <button  onClick={()=>dispatch(changeDark())} className="relative flex  gap-3"> 
            <FaRegMoon/>
            <span className={`absolute p-3 rounded-full bg-white ${(dark)?"right-0":"left-0"} `}></span>
            <FaRegSun/>
          </button>
       

  }
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default NavBar;
