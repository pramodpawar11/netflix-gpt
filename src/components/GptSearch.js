import { backgroundImage_url } from "../utils/constants";
const GptSearch = ()=>{
    return(
        <div>
            <img className="fixed" src={backgroundImage_url} />
            <div className="w-screen h-screen flex justify-center items-center absolute" >
                <div className="bg-black bg-opacity-90 w-6/12 h-20 flex justify-around items-center rounded-xl">
                    <input placeholder="What would you like to watch.." className=" h-14 w-8/12 pl-2 outline-none  rounded-lg"/>
                    <button className="bg-red-600 py-3 px-16 text-lg rounded-lg text-white">Search</button>
                </div>
            </div>
        </div>
    )
}
export default GptSearch;