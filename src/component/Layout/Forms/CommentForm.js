import { useRef, useState } from "react";
import Button from "../Button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getProjects } from "../../store/ProjectSlice";
import Card from "../../Card";
import { PulseLoader } from "react-spinners";

const CommentForm= () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [nameFocuse, setNameFocuse] = useState(false);
  const [emailFocuse, setEmailFocuse] = useState(false);
  const [contentFocuse, setContentFocuse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const createProjectHandler = async (event) => {
    event.preventDefault();
    const comment = {
      name,
      email,
      content,
    };
    const commentRef = collection(db, "comments");
    setIsLoading(true);
    await addDoc(commentRef, comment);
   
    setIsLoading(false); 
    navigate(`/${id}`);
   
  };

  return (
<Card> 
<form
     
     onSubmit={createProjectHandler}
   >
     <div className=" w-full  ">
       <h2 className="dark:text-lime-600 text-red-600  text-3xl font-semibold textShadow text-center">
        Add A New Comment
       </h2>
     </div>
     <div className="my-5 ">
       <div
         className={` flex flex-col items-start justify-center sm:flex-row  pb-2 border-b-4 dark:border-b-lime-600 border-b-red-600`}
       >
         <h3 className="text-2xl w-[190px]  sm:border-r-4 dark:border-r-lime-600 border-r-red-600 ">
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
         <p className="dark:text-lime-600 text-red-600">Name is Required!</p>
       )}
     </div>
     <div className="my-5">
       <div
         className={` flex flex-col items-start justify-center sm:flex-row  pb-2 border-b-4 dark:border-b-lime-600 border-b-red-600`}
       >
         <h3 className="text-2xl  w-[190px]  sm:border-r-4 dark:border-r-lime-600 border-r-red-600 ">
           Your Email{" "}
         </h3>
         <input
           type="email"
           className="  py-2 outline-none  pl-2    flex-1   w-full "
           onChange={(e) => setEmail(e.target.value)}
           onBlur={() => setEmailFocuse(true)}
         />
       </div>
       {email === "" && emailFocuse && (
         <p className="dark:text-lime-600 text-red-600">Email is Required!</p>
       )}
     </div>
     <div className="my-5">
       <div
         className={` flex flex-col items-start justify-center sm:flex-row  pb-2 border-b-4 dark:border-b-lime-600  border-b-red-600`}
       >
         <h3 className="text-2xl  w-[190px]  sm:border-r-4 dark:border-r-lime-600 border-r-red-600 ">
           {" "}
          Your Comment
         </h3>
         <textarea
           type="text"
           className=" min-h-[200px] py-2 outline-none  pl-2   flex-1   w-full "
           onChange={(e) => setContent(e.target.value)}
           onBlur={() => setContentFocuse(true)}
         />
       </div>
       {content === "" && contentFocuse && (
         <p className="dark:text-lime-600 text-red-600">Content is Required!</p>
       )}
     </div>
     <div>
       <Button allowed={content === "" || name === "" || email === ""}>
         Create 
<PulseLoader
  color="#ffffff"
  margin={0}
  size={5}
  loading={isLoading}
  speedMultiplier={1}
/>
       </Button>
     </div>
   </form>
</Card>
  );
};

export default CommentForm;
