import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesTrailer } from "../utils/moviesSlice";
import { MovieOptions } from "../utils/constants";

const useBackgroundTrailer = (movieId) => {
    const trailer = useSelector((store)=>store.movies. moviesTrailer);

    const dispatch = useDispatch();
    useEffect(() => {
       !trailer && fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', MovieOptions);
        const json = await data.json();
        const movieTrailer = (json?.results)?.filter((data) => data?.type === "Trailer");
        const trailer = movieTrailer.length ? movieTrailer[0] : json.results[0];
        dispatch(addMoviesTrailer(trailer));
    }
}
export default useBackgroundTrailer
