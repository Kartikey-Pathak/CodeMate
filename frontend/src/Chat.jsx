import { useLocation } from "react-router-dom";

function Chat(){
     const location = useLocation();
  const { name } = location.state || {};
    return(
        <div className=" h-full w-full flex items-center justify-center flex-col">
            <div className=" h-15 w-full flex items-center bg-black flex-row gap-3">
                <div className=" ml-7 size-10 rounded-full flex items-center justify-center bg-gray-600">
                    <i className=" text-2xl fa-solid fa-user text-white font-semibold"></i>
                </div>
            <h1 className="  font-semibold text-white text-2xl">{name} Chats</h1>
            </div>

            <div className=" h-full w-full overflow-y-scroll border-2">

            </div>


        </div>
    )
}
export default Chat;