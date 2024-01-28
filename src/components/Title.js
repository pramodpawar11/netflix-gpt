import { AiFillCaretLeft,AiOutlineExclamationCircle } from "react-icons/ai";
const Title = ({ title, overview }) => {
    return (
        <div>
            <div className="w-screen h-screen pl-8 absolute bg-gradient-to-r from-black">
                <div className="font-bold text-black flex flex-col justify-center  w-6/12 h-screen">
                    <h1 className="mb-4 text-2xl text-white">{title}</h1>
                    <h1 className="w-10/12 text-sm text-white">{overview}</h1>
                    <div className="mr-80">
                        <button className="bg-white text-black py-2 px-7 rounded-xl mt-4 hover:bg-opacity-80 "><AiFillCaretLeft className="inline-block mb-1 text-xl" />Play</button>
                        <button className="bg-gray-500 bg-opacity-75 py-2 px-7 rounded-xl  ml-2 hover:bg-opacity-45 text-white"><AiOutlineExclamationCircle className="inline-block mb-1 mr-1 text-xl" />More info</button>
                    </div>

                </div>
            </div>


        </div>
    )
}
export default Title;