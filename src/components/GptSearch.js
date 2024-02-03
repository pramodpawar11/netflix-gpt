import { useDispatch, useSelector } from "react-redux";
import { MovieOptions, backgroundImage_url } from "../utils/constants";
import lag from "../utils/langConstant";
import { useRef } from "react";
import openAi from "../utils/openAi";
import { addgptSearchedMovies,addMovieNames } from "../utils/gptSlice";

const GptSearch = ()=>{
    const dispatch = useDispatch();
    const lagContain = useSelector((store)=>store.config.lag);
    const search = useRef(null);
    const movieSearching = async (movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",MovieOptions );
        const json = await data.json();
        return json.results;    
    }
    const handleSearchBar = async ()=>{
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query"+search.current.value+"only give me the name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Don,Golmaal,Hum Aapke Hai Kon, Koi Meel Gaya";
        const gptResults = await openAi.chat.completions.create({
          messages: [{ role: 'user',content: gptQuery}],
          model: 'gpt-3.5-turbo',
        });

        let movieList=gptResults.choices;
        let convertedArrayList = movieList[0].message.content.split(",");
        let gptMovieList = convertedArrayList.map((movie)=>movieSearching(movie));
        const tmdbResults =  await Promise.all(gptMovieList);
        dispatch(addgptSearchedMovies(tmdbResults));
        dispatch(addMovieNames(convertedArrayList));
    }

    return(
        <div>
            <img className="fixed" src={backgroundImage_url} />
            <div className="w-screen h-screen flex justify-center items-center absolute" >
                <form className="bg-black bg-opacity-90 w-8/12 h-16 flex justify-around items-center rounded-xl mb-60" onSubmit={(e)=>e.preventDefault()}>
                    <input ref={search} type="text" placeholder={lag[lagContain].gptPlaceholder} className=" h-10 w-8/12 pl-2 outline-none  rounded-lg"/>
                    <button className="bg-red-600 py-1.5 px-16 text-lg rounded-lg text-white hover:bg-opacity-80" onClick={handleSearchBar}>{lag[lagContain].search}</button>
                </form>
            </div>
        </div>
    )
}
export default GptSearch;