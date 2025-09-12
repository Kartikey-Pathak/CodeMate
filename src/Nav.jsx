import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

function Nav() {

  const [click, setclick] = useState(false);
 const [tab, settab] = useState(false);
  const box = useRef(null);

   const open = () => {
    settab(!tab);
  }
  useEffect(() => {
    if (tab && box.current) {
      gsap.fromTo(
        box.current,
        { height: 0 },
        { height: "10rem", duration: 0.5, ease: "power2.out" }
      );
    }
    if (!tab && box.current) {
      gsap.to(box.current, { height: 0, duration: 0.5, ease: "power2.in" });
    }
  }, [tab]);


  return (
    <div className=" w-full max-w-screen h-20 bg-black flex items-center justify-between">
      {/* logo */}
      <div className=" flex items-center justify-center h-full m-5 cursor-pointer">
        <img src="./CodeMate.png" className=" h-full w-full object-cover" alt="" />
      </div>

      <div className=" flex flex-row gap-1 items-center justify-center h-full relative">
        <Link to="/sign-up" className=" h-full flex items-center justify-center">
          <div onClick={() => { setclick(!click) }} className={` h-[60%] m-6 rounded-2xl hover:bg-white/40 cursor-pointer transition-all w-32 ${click ? "bg-white/20" : "bg-white"} flex items-center justify-center`}>
            <h1 className=" text-black font-semibold">Sign-Up</h1>
          </div>
        </Link>
        <div onClick={() => { open() }} className=" bg-[#262C36] cursor-pointer transition-all hover:opacity-80 rounded-xl mr-4 flex items-center justify-center size-10"><i className="fa-solid fa-ellipsis"></i></div>
        {tab?
        <div ref={box} className=" absolute z-[100] h-40 w-48 bg-black border-2 flex flex-col gap-1 items-start border-white/20 top-10 rounded-xl">
          <div className="flex flex-row items-center m-5 mt-7 gap-3"><i className="fa-regular text-xl text-gray-500 fa-circle-user"></i><h1 className=" text-white">Profile</h1></div>
          <div className="flex flex-row items-center ml-5 gap-3"><i className="fa-solid fa-users text-xl text-gray-500"></i><h1 className=" text-white">Community</h1></div>
        </div>
        :null
        }
      </div>


    </div>
  )
}
export default Nav;