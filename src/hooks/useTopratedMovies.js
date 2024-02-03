
import { useDispatch, useSelector } from "react-redux";
import { MovieOptions } from "../utils/constants";
import { addTopratedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopratedMovies = () => {
    const dispatch = useDispatch();
    const TopRatedMovies = useSelector((store)=>store.movies.TopRatedMovies);
    useEffect(() => {
        !TopRatedMovies && fetchData()
    }, []);
    const fetchData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', MovieOptions);
        const json = await data.json();
        dispatch(addTopratedMovies(json?.results));
    }
}
export default useTopratedMovies;