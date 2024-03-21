import { Route, Routes } from "react-router";
import NavBar from "./component/Layout/NavBar";
import NewProject from "./component/NewProject";
import Home from "./component/Home";
import Footer from "./component/Layout/Footer";
import ProjectDetails from "./component/ProjectDetails";
import { useSelector } from "react-redux";

function App() {
  const dark=useSelector((state)=>state.theme.dark)
  return (
<div className={dark?"dark":""}>
<div className="dark:bg-gray-800 bg-yellow-50 relative  py-[100px] min-h-[100vh] px-[50px] lg:px-[25%]">
      <NavBar />
      <Routes>
        <Route path="/projects" element={<Home></Home>}></Route>
        <Route path="/NewProject" element={<NewProject></NewProject>}></Route>
        <Route path="/projects/:id" element={<ProjectDetails/>}></Route>
      </Routes>
      <Footer/>
    </div>
</div> 

  );
}

export default App;
