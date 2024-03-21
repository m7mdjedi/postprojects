import React, { useEffect, useState } from 'react'
import Container from './Layout/Container'
import Project from './Project'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from './store/ProjectSlice'
import { CiSearch } from "react-icons/ci";
import ClipLoader from "react-spinners/ClipLoader";
import { FadeLoader } from 'react-spinners'
import ErrorModal from './Layout/ErrorModal'


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


const Home = () => {
  const dark= useSelector(state=>state.theme.dark);
    const [filteredProject ,setFilterdProject] = useState('');
    let {isLoading , projects , error}= useSelector(state=>state.project) ;
    if(filteredProject!=='')
   projects=projects.filter(ele=>ele.content.startsWith(filteredProject));
    const dispatch= useDispatch();
    useEffect(()=>{ 
        dispatch(getProjects());
    },[dispatch])
  if(isLoading==='loading'){
    return   <div className='flex justify-center'> 
     
<FadeLoader color={dark?"lime":"#d63652"} />
    </div>
   } 
  if(projects.length===0 && filteredProject==='' )
  return <ErrorModal/>
  return <> 
  <div className='w-full rounded-xl px-4 flex gap-2 bg-white items-center overflow-hidden border-gray-100 border-2 '> 
  <CiSearch className='text-2xl font-bold '/>
  <input type='text'  className='flex-1 py-4 outline-none'  placeholder='Search...' onChange={(e)=>setFilterdProject(e.target.value)}/>
  </div>
  
{ 
projects.map(ele => <Project key={ele.id} project={ele}/>)
}
</>
  
  
}

export default Home
