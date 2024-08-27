import djmax from "./assets/img/djmax-sobrem.gif"

function MainContent(){
    return(
        <><div className="flex flex-row md:flex items-center justify-center gap-0 h-96 bg-black">
          <div className="bg-black text-white text-center w-screen text-2xl"><h1>Today is friday</h1>
          </div>
          <div className=" flex text-white justify-center items-center"><img className="w-auto h-[384px]" src={djmax} alt="carrot carrot" />
          </div>
        </div></> 
    )
};

export default MainContent