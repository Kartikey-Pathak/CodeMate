import { useState } from "react";
import Nav from "./Nav";

function IssueForm() {
    const [blue, setblue] = useState(false);
     const [blue2, setblue2] = useState(false);
    return (
        <>
            <Nav />
            <div className="bg-[#0D1117] h-screen w-full max-w-screen">
                <div className=" h-full w-full flex items-start flex-col gap-3 border-2">
                    <div className=" flex flex-row items-center justify-start gap-1 mt-10 ml-10 h-15 w-64">
                        <i className=" font-semibold text-4xl fa-solid fa-circle-user"></i>
                        <h1 className=" font-semibold text-white">Create New Issue</h1>
                    </div>
                    <div className=" flex flex-col items-start justify-start h-24 gap-1 w-[80%] max-w-[80rem] ml-10 ">
                        <p className=" font-semibold">Add a title <span className=" text-red-500">*</span></p>
                        <input onFocus={() => { setblue(true) }} onBlur={() => { setblue(false) }} type="text" placeholder="Title" className={` outline-none p-4 w-full ${blue ? "border-blue-600" : "border-gray-600"} rounded-md h-8  border-2`} />
                    </div>
                    <div className=" flex flex-col items-start justify-start h-[40rem] gap-1 w-[80%] max-w-[80rem] m-10">
                        <p className=" font-semibold">Add a description</p>
                        <textarea
                            onFocus={() => setblue2(true)}
                            onBlur={() => setblue2(false)}
                            placeholder="Description"
                            className={`outline-none p-4 w-full rounded-md border-2 ${blue2 ? "border-blue-600" : "border-gray-600"} resize-none h-full`}
                        />
                    </div>
                     <div className=" w-full h-56"></div>
                </div>

            </div>
        </>
    )
}
export default IssueForm;