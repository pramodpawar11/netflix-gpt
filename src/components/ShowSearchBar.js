import GptMoveSuggestions from "./GptMovieSuggestion"
import GptSearch from "./GptSearch"
const ShowSearchBar = ()=>{
    return(
        <div>
                <GptSearch/>
                <GptMoveSuggestions/>
        </div>
    )
}
export default ShowSearchBar