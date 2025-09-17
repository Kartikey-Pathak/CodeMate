import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);


function Page() {
  const location = useLocation();
  const { issue } = location.state || {};
  const [copy, setcopy] = useState();

  const box = useRef(null);

  if (!issue) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-bold text-red-500">No issue selected</h1>
      </div>
    );
  }

  // Copy handler
  const copyToClipboard = () => {
    navigator.clipboard.writeText(issue.link)
      .then(() => {
        // alert("Link copied to clipboard! ✅");
        setcopy(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  useEffect(() => {
    if (copy && box.current) {
      gsap.fromTo(
        box.current,
        { width: 0, opacity: 0, scale: 0 },
        { width: "20rem", opacity: 1, scale: 1.1, duration: 0.8, ease: "power2.out" }
      );

      const timeout = setTimeout(() => setcopy(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copy]);


  return (
    <div className=" w-full max-w-screen h-full ">
      <br />
      <div className=" m-8 ml-20 flex gap-2 flex-col">
        <h1 className="   text-4xl  text-white">{issue.title}</h1>
        <h2 className=" text-gray-400 text-[1rem]">{issue.name} Raised The issue</h2>
      </div>

      <div className=" flex justify-center flex-col items-center">
        <div className=" flex h-full w-[90%] border-gray-800 border-t-2">
          <div className=" h-screen w-full flex flex-row justify-center gap-3 mt-6">
            <div className=' m-2 size-15 bg-black rounded-full flex items-center justify-center'><i className=" text-2xl m-2 fa-solid fa-user text-gray-400 "></i></div>
            <div className=" h-full rounded-xl  border-2 border-gray-700 w-[90%] flex-col flex items-center  relative overflow-y-scroll "><div className=" absolute top-0 border-b-2 rounded-t-xl border-gray-700 h-10 w-full bg-[#151B23] flex items-center"><div className=" h-[80%] w-20 rounded-xl m-2 bg-green-700 flex flex-row justify-evenly items-center text-center"><i className=" text-white font-semibold fa-solid fa-circle-dot"></i><h1 className=" text-center font-semibold">open</h1></div></div>

              {/* the content */}
              <div className=" h-[90%] mt-12 md:mt-15 w-[98%]      flex flex-col">
                <h1 className=" font-semibold text-3xl m-5 md:m-10">Description </h1>
                <h2 className=" text-xl md:text-2xl  md:mt-3 m-5 md:ml-10">{issue.des}</h2>

                <h1 className=" font-semibold text-3xl m-5 md:m-10">Repo Link</h1>

                <div className=" flex justify-center">
                  <div className=" h-10 w-[98%] md:w-[95%] lg:w-[70%] xl:w-[60%] flex-row  flex items-center justify-evenly gap-3  md:gap-10 bg-white/10 rounded-xl">
                    <i className=" text-gray-100 text-2xl md:text-3xl font-semibold fa-brands fa-github"></i>
                    <a href={issue.title}>
                      <h2 className=" text-[1rem] md:text-2xl text-blue-500 hover:underline hover:text-blue-400 cursor-pointer transition-all">{issue.link}</h2></a>
                    <i onClick={copyToClipboard} className=" text-2xl md:text-3xl cursor-pointer hover:text-gray-400 hover:shadow-2xl shadow-black backdrop-blur-2xl transition-all font-semibold text-gray-500 fa-solid fa-copy"></i>
                  </div>
                </div>
                {/* the message */}
                {copy ?
                  <div className=" flex items-center justify-center w-full mt-10 h-12">
                    <div ref={box} role="alert" className="alert alert-success h-full w-0 opacity-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Link Copied!</span>
                    </div>
                  </div> : null}
                {/* the message */}


              </div>


            </div>

          </div>

        </div>

        {/* the buttons */}
        <div className=" w-[90%] md:w-[80%] m-10 flex items-center flex-row justify-between border-2">
          <div className="  h-10 w-40 hover:bg-white/20 transition-all cursor-pointer bg-white/12 rounded-2xl flex flex-row gap-3 items-center justify-center ">
          <i className=" text-2xl font-semibold text-red-600 fa-solid fa-xmark"></i>
          <h1>Close issue</h1>
          </div>

          <div className="  h-10 w-40 cursor-pointer hover:bg-green-700 transition-all bg-green-600 rounded-2xl flex flex-row gap-3 items-center justify-center ">
          <i className=" text-2xl font-semibold text-white fa-solid fa-message"></i>
          <h1 className=" font-semibold text-white">Chats</h1>
          </div>
        </div>
        {/* the buttons */}


      </div>

      {/* The last ending part */}
      <div className=" h-52 w-full"> </div>



    </div>
  )
}
export default Page;