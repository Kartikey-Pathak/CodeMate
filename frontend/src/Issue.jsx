import { Link } from "react-router-dom";

function Issue(){
    return(

        <div className=" h-full w-full z-[200] relative">
            <Link to="/form">
            <div className=" bottom-10 md:bottom-20 right-6 fixed md:right-20 p-3 px-4 shadow-2xl shadow-black backdrop-blur-2xl rounded-2xl cursor-pointer hover:bg-green-500 bg-green-600 flex items-center justify-center text-center" ><h1 className=" font-semibold text-white text-center">New Issue</h1></div>
            </Link>  
        </div>
    )
}
export default Issue;