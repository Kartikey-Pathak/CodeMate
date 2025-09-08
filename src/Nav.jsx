function Nav(){
    return(
        <div className=" w-full max-w-screen h-20 bg-black flex items-center justify-between">
          {/* logo */}
          <div className=" flex items-center justify-center h-full m-5">
            <img src="./CodeMate.png" className=" h-full w-full object-cover" alt="" />
          </div>

          <div className=" h-[60%] m-6 rounded-2xl hover:bg-white/40 cursor-pointer transition-all w-32 bg-white flex items-center justify-center">
            <h1 className=" text-black font-semibold">Sign-Up</h1>
          </div>       
        </div>
    )
}
export default Nav;