
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer.js";
import useBrowse from "../hooks/useBrowse.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopratedMovies from "../hooks/useTopratedMovies.js";

const Browse = ()=>{
    useBrowse();
    usePopularMovies()
    useTopratedMovies()
    return(
        <div className="h-screen w-screen">
            <Header/>
            <MainContainer/>
            <SecondContainer/>
        </div>
    )
}
export default Browse;