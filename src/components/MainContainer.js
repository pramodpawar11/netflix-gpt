import { useSelector } from "react-redux";
import BackgroundVideo from "./BackgroundVideo";
import Title from "./Title";
const MainContainer = ()=>{
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const firstMovie = movies[0];
    return(
        <div>
            <Title title={firstMovie?.original_title} overview={firstMovie?.overview}/>
            <BackgroundVideo movieId={firstMovie?.id}/>
        </div>
    )
}
export default MainContainer;