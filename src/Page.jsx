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
        <div className=" w-full max-w-screen h-screen ">
            <div className=" m-20 flex flex-col items-center">
                <h1>{issue.title}</h1>

            </div>

        </div>
    )
}
export default Page;