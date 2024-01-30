
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer.js";
import useBrowse from "../hooks/useBrowse.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopratedMovies from "../hooks/useTopratedMovies.js";
import { useSelector } from "react-redux";
import ShowSearchBar from "./ShowSearchBar.js";

const Browse = ()=>{
    let showState = useSelector((store)=>store.gpt.searchBar);
    useBrowse();
    usePopularMovies()
    useTopratedMovies()
    return(
        <div className="h-screen w-screen">
            <Header/>
            {showState ? <ShowSearchBar/> : (<> <MainContainer/>
            <SecondContainer/></>)}
        </div>
    )
}
export default Browse;