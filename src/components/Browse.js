import { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer.js";
import useBrowse from "../hooks/useBrowse.js";

const Browse = ()=>{
    useBrowse();
    return(
        <div className="h-screen w-screen">
            <Header/>
            <MainContainer/>
            <SecondContainer/>
        </div>
    )
}
export default Browse;