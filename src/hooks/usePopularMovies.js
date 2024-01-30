
import { useDispatch } from "react-redux";
import { MovieOptions } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
       fetchData()
    },[]);
    const fetchData = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',MovieOptions);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
    }
}
export default usePopularMovies;