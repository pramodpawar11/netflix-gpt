import { useSelector } from "react-redux"
import MoviesList from "./MoviesLists.js";
const SecondContainer =()=>{
    const movie = useSelector((store)=>store.movies);
    return (
        <div className="bg-black">
            <div className="-mt-32 relative z-20">
                <MoviesList title={"Nowplaying"} movie={movie.nowPlayingMovies}/>
                <MoviesList title={"Popular"} movie={movie.popularMovies}/>
                <MoviesList title={"Toprated"} movie={movie.topratedMovies}/>
            </div>
        </div>
    )
}
export default SecondContainer