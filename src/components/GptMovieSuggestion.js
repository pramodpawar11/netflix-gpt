import { useSelector } from "react-redux";
import MoviesList from "./MoviesLists";
import MoviesCard from "./MovieCards";

const SuggestedMovies =({movieArray})=>{
    const {movieNames} = useSelector((store)=>store.gpt);
    // console.log(movieArray);
    return(
        <div>
    
        </div>
    )
}
const GptMoveSuggestions = ()=>{
    const {gptSearchedMovies,movieNames} = useSelector((store)=>store.gpt);
    if(!movieNames) return null;
    return(
        <div>
        {
            movieNames.map(movieNames=><MoviesList key={movieNames} title={movieNames} movie={gptSearchedMovies[0]}/>)
        }
        </div>
    )
}
export default GptMoveSuggestions;