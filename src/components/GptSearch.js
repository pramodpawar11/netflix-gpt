import { useSelector } from "react-redux";
import { backgroundImage_url } from "../utils/constants";
import lag from "../utils/langConstant";
const GptSearch = ()=>{
    const lagContain = useSelector((store)=>store.config.lag)
    return(
        <div>
            <img className="fixed" src={backgroundImage_url} />
            <div className="w-screen h-screen flex justify-center items-center absolute" >
                <div className="bg-black bg-opacity-90 w-8/12 h-16 flex justify-around items-center rounded-xl mb-60">
                    <input placeholder={lag[lagContain].gptPlaceholder} className=" h-10 w-8/12 pl-2 outline-none  rounded-lg"/>
                    <button className="bg-red-600 py-1.5 px-16 text-lg rounded-lg text-white hover:bg-opacity-80">{lag[lagContain].search}</button>
                </div>
            </div>
        </div>
    )
}
export default GptSearch;