import { useRef, useState } from "react";
import Button from "../Button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { getProjects } from "../../store/ProjectSlice";
import Card from "../../Card";

const CreateProjectForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [nameFocuse, setNameFocuse] = useState(false);
  const [titleFocuse, setTitleFocuse] = useState(false);
  const [contentFocuse, setContentFocuse] = useState(false);
  const createProjectHandler = async (event) => {
    event.preventDefault();
    const project = {
      name,
      title,
      content,
    };
    const projectRef = collection(db, "projects");
    await addDoc(projectRef, project);
    dispatch(getProjects());
    navigate("/");
  };

  return (
  <Card> 
      <form
    
    onSubmit={createProjectHandler}
  >
    <div className=" w-full  ">
      <h2 className="dark:text-gray-800 text-red-900  text-3xl font-semibold textShadow text-center">
        Share Your Thoughts
      </h2>
    </div>
    <div className="my-5 ">
      <div
        className={` flex flex-col items-start justify-center sm:flex-row  pb-2 border-b-4 dark:border-b-gray-800 border-b-red-600`}
      >
        <h3 className="text-2xl w-[190px]  sm:border-r-4  dark:border-r-gray-800 border-r-red-600 ">
          Your Name{" "}
        </h3>
        <input
          type="text"
          className=" py-2 outline-none  pl-2    flex-1   w-full "
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameFocuse(true)}
        />
      </div>
      {name === "" && nameFocuse && (
        <p className="dark:text-gray-800 text-red-900">Name is Required!</p>
      )}
    </div>
    <div className="my-5">
      <div
        className={` flex flex-col items-start justify-center sm:flex-row  pb-2 border-b-4 dark:border-b-gray-800 border-b-red-600`}
      >
        <h3 className="text-2xl  w-[190px]  sm:border-r-4 dark:border-r-gray-800  border-r-red-600 ">
          Project Title{" "}
        </h3>
        <input
          type="text"
          className="  py-2 outline-none  pl-2    flex-1   w-full "
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setTitleFocuse(true)}
        />
      </div>
      {title === "" && titleFocuse && (
        <p className="dark:text-gray-800 text-red-900">title is Required!</p>
      )}
    </div>
    <div className="my-5">
      <div
        className={` flex flex-col items-start justify-center sm:flex-row  pb-2 border-b-4 dark:border-b-gray-800  border-b-red-600`}
      >
        <h3 className="text-2xl  w-[190px]  sm:border-r-4 dark:border-r-gray-800 border-r-red-600 ">
          {" "}
          Project Conent
        </h3>
        <textarea
          type="text"
          className=" min-h-[200px] py-2 outline-none  pl-2   flex-1   w-full "
          onChange={(e) => setContent(e.target.value)}
          onBlur={() => setContentFocuse(true)}
        />
      </div>
      {content === "" && contentFocuse && (
        <p className="dark:text-gray-800 text-red-900">Content is Required!</p>
      )}
    </div>
    <div>
      <Button allowed={content === "" || name === "" || title === ""}>
        Create
      </Button>
    </div>
  </form>
  </Card>
  );
};

export default CreateProjectForm;
