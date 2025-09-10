import { useState } from "react";
import { Link } from "react-router-dom";


function Nav(){
  const [click,setclick]=useState(false);
    return(
        <div className=" w-full max-w-screen h-20 bg-black flex items-center justify-between">
          {/* logo */}
          <div className=" flex items-center justify-center h-full m-5">
            <img src="./CodeMate.png" className=" h-full w-full object-cover" alt="" />
          </div>
         
         <Link to="/sign-up" className=" h-full flex items-center justify-center">
          <div onClick={()=>{setclick(!click)}} className={` h-[60%] m-6 rounded-2xl hover:bg-white/40 cursor-pointer transition-all w-32 ${click?"bg-white/20":"bg-white"} flex items-center justify-center`}>
            <h1 className=" text-black font-semibold">Sign-Up</h1>
          </div></Link>
        </div>
    )
}
export default Nav;