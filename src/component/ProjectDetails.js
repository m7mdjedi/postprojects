import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Container from "./Layout/Container";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import { db } from "./config/firebase";
import {collection, getDoc ,doc, getDocs , query, where} from 'firebase/firestore'
import Comment from "./Comment";
import { nameHanlder } from '../utils/projectUtils'
import CommentForm from "./Layout/Forms/CommentForm";
import { PulseLoader } from "react-spinners";
import Card from "./Card";
import ErrorModal from "./Layout/ErrorModal";

const ProjectDetails = () => {
  const { id } = useParams();
  const dark= useSelector((state)=>state.theme.dark)
  const [project,setProject] = useState({});
  const [comments,setComments]= useState([]);
  const [isLoading,setIsLoading] = useState(false); 
  const [error , setError] = useState(false);
  const projectRef=collection(db,'projects');
  const commentsRef=collection(db,'comments');
  useEffect(()=>{ 
    const getProject = async ()=>{
  const proRef=   doc(projectRef,id);
  setIsLoading(true);
 try { 
  const pro= await getDoc(proRef);

  const comments = await getDocs(query(commentsRef,where("projectId","==",id)));
    console.log(comments.docs,'hh1');
  const newData = comments.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(newData,'hhh2');
  setComments(newData);
  setProject(pro.data());
} catch(error){ 
  setError(true);
} 
setIsLoading(false);
    }
  getProject(); 
  //console.log(pro.data(),'hhh3');
  
  },[]); 
  if(isLoading){ 
    return <div className="flex justify-center"> 
      <PulseLoader
    color={dark?"lime":"#d63644"}
    margin={0}
    size={15}
    speedMultiplier={1}
  />
    </div>
  }
  if(error){
    return <ErrorModal></ErrorModal>
   }
  return (
    <div >
   <Card> 
   <div className="dark:text-lime-600 text-red-600 textShadow  font-bold text-4xl  "> 
            {project.title}
          </div>
          <p className="mt-2 font-semibold  text-gray-700"> 
            by {project.name}
          </p>
          <div className="text-2xl mt-10 font-bold "> 
            {project.content}
          </div>
   </Card>
      {/* this is the comments part */} 
      <div className="mt-10 flex mb-10">
        <span className="font-bold text-3xl dark:text-lime-600 text-gray-700">COMMENTS</span>
        <span className=" border-b-4 flex-1 mb-[12px] border-gray-300 ml-[10px] rounded-sm"></span>
        </div> 
<Card> 
{ 
   comments.length ? (comments.map(ele => <Comment comment={ele}/>) ):<p className="w-full text-center text-2xl font-bold">No Comments Yet </p>
      
}
</Card>
      {/* This is the create a new comment part */}
      <div className="my-10  "> 
        <CommentForm/>
      </div>
    </div >
  );
};

export default ProjectDetails;
