import { useLocation } from "react-router-dom";

function Page() {
  const location = useLocation();
  const { issue } = location.state || {};

  if (!issue) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-bold text-red-500">No issue selected</h1>
      </div>
    );
  }
  return (
    <div className=" w-full max-w-screen h-full ">
      <br />
      <div className=" m-8 ml-20 flex gap-2 flex-col">
        <h1 className="   text-4xl  text-white">{issue.title}</h1>
        <h2 className=" text-gray-400 text-[1rem]">{issue.name} Raised The issue</h2>
      </div>

      <div className=" flex justify-center">
        <div className=" flex h-full w-[90%] border-gray-800 border-t-2">
          <div className=" h-screen w-full flex flex-row justify-center gap-3 mt-6">
            <div className=' m-2 size-15 bg-black rounded-full flex items-center justify-center'><i className=" text-2xl m-2 fa-solid fa-user text-gray-400 "></i></div>
            <div className=" h-full rounded-xl  border-2 border-gray-700 w-[90%] flex-col flex  relative overflow-y-scroll "><div className=" absolute top-0 border-b-2 rounded-t-xl border-gray-700 h-10 w-full bg-[#151B23]"></div> df</div>

          </div>

        </div>


      </div>
      {/* The last ending part */}
        <div className=" h-52 w-full"> </div>



    </div>
  )
}
export default Page;