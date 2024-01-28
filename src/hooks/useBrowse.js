import { useDispatch } from "react-redux";
import { MovieOptions } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useBrowse = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
       fetchData()
    },[]);
    const fetchData = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',MovieOptions);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json?.results));
    }
}
export default useBrowse