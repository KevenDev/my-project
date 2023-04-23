import Header from "../components/Header";
import {Outlet} from "react-router-dom"
 

const SharedLayout = ()=>{
  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-[#202024] rounded-lg h-1/2 w-[90%] ">
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default SharedLayout;