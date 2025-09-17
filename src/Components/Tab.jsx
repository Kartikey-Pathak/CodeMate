import { use, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import People from './People';
import { Link } from 'react-router-dom';


gsap.registerPlugin(useGSAP);

function Tab() {

  const [tab, settab] = useState(false);
  const box = useRef(null);

  const [issues, setissues] = useState([{
    title: "Bug: Dropdown animation not closing smoothly",
    des: "When toggling the Author filter dropdown, the animation for closing is abrupt and doesn't match the opening transition. It would be better to add a smooth reverse animation when the dropdown is closed.",
    link: "https://github.com/username/issue-tracker-ui",
    name: "Pathak"
  }]);
 
  const open = () => {
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
    <div className=" h-full w-[100%] flex items-center justify-center">

      <div className=" m-10 h-[32rem] flex-col  border-gray-700 overflow-y-scroll overflow-x-hidden flex  w-full border-2 rounded-2xl">
        <div className=" h-20 mx-auto w-full bg-[#151B23] flex items-center justify-between">
          <div className=" flex flex-row items-center justify-center">
            <h1 className=" m-3 font-semibold text-white">Open</h1>
            <div className=" size-6 px-5 flex items-center justify-center rounded-full bg-[#252C34]"><p className=" font-semibold text-green-400 text-center">0</p></div>
          </div>

          {/* authors */}
          <div onClick={() => { open() }} className={`relative flex flex-row items-center justify-center ${tab ? "bg-gray-800" : null} text-center gap-3 hover:bg-gray-500 transition-all cursor-pointer rounded-xl p-2 m-8`}>
            <h1 className=" font-semibold text-[#9198A1]">Author</h1>
            <i className="  font-semibold text-[#9198A1] fa-solid fa-angle-down"></i>
            {/* hidden one */}
            {tab ?
              <People box={box} />
              : null
            }
          </div>
        </div>
        {!issues ?
          <div className=' flex justify-center h-full w-full'>
            <div className=' md:w-60 w-48 h-48 md:h-60 flex flex-col gap-1 items-center m-6 justify-center'>
              <img src="./no.png" className=' h-full w-full object-cover' alt="" />
              <h1 className=' font-semibold text-white text-xl'>No Issues Found Yet</h1>
              <h2 className=' text-gray-400 font-medium text-sm m-2'>You Can Raise A New One</h2>

            </div>
          </div> :
          // issues Part
          <div className=' h-full w-full flex flex-col ' >
            {issues.map((item, idx) => (
              <div key={idx} className=' h-[4.5rem] w-full border-t-1 grid grid-rows-2  border-b-1 border-gray-700'>
                <div className=' flex flex-row m-6 items-center gap-3 w-full'><i className=" text-green-500 font-semibold fa-solid fa-circle-dot"></i>
                  <Link to='/page' state={{ issue: item }}><h1 className=' font-semibold text-white text-[1rem] md:text-xl cursor-pointer hover:text-blue-400 hover:underline transition-all'>{item.title}</h1></Link>
                </div>
                <h1 className='  text-[0.8rem] md:text-sm  md:m-2 text-gray-400 ml-28 mt-3 md:ml-15'>{item.name} opened this issue</h1>
              </div>
            ))
            }

          </div>
        }

      </div>


    </div>
  )
}
export default Tab;