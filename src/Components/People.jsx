function People({box}){
    return(
          <div className='absolute z-50 top-10 flex w-screen'>
              <div ref={box} className=' bg-black h-0 rounded-xl w-[60%] max-w-[20rem] flex flex-col justify-start  items-start overflow-y-scroll '>
                <h1 className=' m-5 font-semibold text-white'>Raised By</h1>

                <div className=' w-full flex-col gap-10 flex'>

                  <div className=' h-10 w-full rounded-xl bg-[#15191F] flex flex-row items-center '> <div className=' m-2 size-8 bg-amber-50 rounded-full flex items-center justify-center'><i className=" m-2 fa-solid fa-user"></i></div><h1 className=' font-semibold text-white'>Kartikey Pathak</h1></div>
                  <div className=' h-10 w-full rounded-xl bg-[#15191F] flex flex-row items-center '> <div className=' m-2 size-8 bg-amber-50 rounded-full flex items-center justify-center'><i className=" m-2 fa-solid fa-user"></i></div><h1 className=' font-semibold text-white'>Kartikey Pathak</h1></div>
                  <div className=' h-10 w-full rounded-xl bg-[#15191F] flex flex-row items-center '> <div className=' m-2 size-8 bg-amber-50 rounded-full flex items-center justify-center'><i className=" m-2 fa-solid fa-user"></i></div><h1 className=' font-semibold text-white'>Kartikey Pathak</h1></div>
                  <div className=' h-10 w-full rounded-xl bg-[#15191F] flex flex-row items-center '> <div className=' m-2 size-8 bg-amber-50 rounded-full flex items-center justify-center'><i className=" m-2 fa-solid fa-user"></i></div><h1 className=' font-semibold text-white'>Kartikey Pathak</h1></div>

                </div>

              </div>
            </div>
    )
}
export default People;