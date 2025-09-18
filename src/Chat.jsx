import { useLocation } from "react-router-dom";

function Chat(){
     const location = useLocation();
  const { name } = location.state || {};
    return(
        <div>
            <h1>{name} Chats</h1>

        </div>
    )
}
export default Chat;