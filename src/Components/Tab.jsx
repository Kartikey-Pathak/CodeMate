import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Tab() {
  
  const [tab,settab]=useState(false);
  const box=useRef(null);

  const open=()=>{
    settab(!tab);
  }
   useEffect(() => {
    if (tab && box.current) {
      gsap.fromTo(
        box.current,
        { height: 0 },
        { height: "15rem", duration: 0.5, ease: "power2.out" }
      );
    }
    if (!tab && box.current) {
      gsap.to(box.current, { height: 0, duration: 0.5, ease: "power2.in" });
    }
  }, [tab]);

  return (
    <div  className=" h-full w-[100%] flex items-center justify-center">

      <div className=" m-10 h-[32rem]  border-gray-700 overflow-y-scroll overflow-x-hidden flex justify-center w-full border-4 rounded-2xl">
        <div className=" h-20 mx-auto w-full bg-[#151B23] flex items-center justify-between">
          <div className=" flex flex-row items-center justify-center">
            <h1 className=" m-3 font-semibold text-white">Open</h1>
            <div className=" size-6 px-5 flex items-center justify-center rounded-full bg-[#252C34]"><p className=" font-semibold text-green-400 text-center">0</p></div>
          </div>

          {/* authors */}
          <div onClick={()=>{open()}}  className={`relative flex flex-row items-center justify-center ${tab?"bg-gray-800":null} text-center gap-3 hover:bg-gray-500 transition-all cursor-pointer rounded-xl p-2 m-8`}>
            <h1 className=" font-semibold text-[#9198A1]">Author</h1>
            <i className="  font-semibold text-[#9198A1] fa-solid fa-angle-down"></i>
            {/* hidden one */}
            {tab?
            <div className='absolute z-50 top-10 flex w-screen'>
              <div ref={box} className=' bg-black h-0 rounded-xl w-[60%] max-w-[20rem] flex flex-col justify-start items-start overflow-y-scroll '>
                <h1 className=' m-5 font-semibold text-white'>Raised By</h1>

                <div className=' border-2 w-full flex-col gap-10 flex'>

                  <div className=' h-10 w-full rounded-xl bg-[#15191F] flex flex-row items-center '> <div className=' m-2 size-8 bg-amber-50 rounded-full flex items-center justify-center'><i className=" m-2 fa-solid fa-user"></i></div><h1 className=' font-semibold text-white'>Kartikey Pathak</h1></div>
                  <div className=' h-10 w-full rounded-xl bg-[#15191F] flex flex-row items-center '> <div className=' m-2 size-8 bg-amber-50 rounded-full flex items-center justify-center'><i className=" m-2 fa-solid fa-user"></i></div><h1 className=' font-semibold text-white'>Kartikey Pathak</h1></div>
                  <div className=' h-10 w-full rounded-xl bg-[#15191F] flex flex-row items-center '> <div className=' m-2 size-8 bg-amber-50 rounded-full flex items-center justify-center'><i className=" m-2 fa-solid fa-user"></i></div><h1 className=' font-semibold text-white'>Kartikey Pathak</h1></div>
                  <div className=' h-10 w-full rounded-xl bg-[#15191F] flex flex-row items-center '> <div className=' m-2 size-8 bg-amber-50 rounded-full flex items-center justify-center'><i className=" m-2 fa-solid fa-user"></i></div><h1 className=' font-semibold text-white'>Kartikey Pathak</h1></div>

                </div>

              </div>
            </div>
            :null
          }
          </div>




        </div>

      </div>


    </div>
  )
}
export default Tab;