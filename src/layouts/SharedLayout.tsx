import Header from "../components/Header";
import {Outlet} from "react-router-dom"
 

const SharedLayout = ()=>{
  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-[#202024] rounded-lg w-[calc(100vw-30px)] h-[60%] ">
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default SharedLayout;