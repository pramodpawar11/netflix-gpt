import { useState,useRef } from "react";
import CheckValidate from "../utils/checkValidate";

const SignInForm = ()=>{
    const [newValues,setnewValues] = useState(false);
    const [validMessage,setvalidMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    function handler(){
        setnewValues(!newValues);
    }
    function handleValidate(){
        const message = CheckValidate(email.current.value,password.current.value);
        setvalidMessage(message);

    }
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="w-4/12 h-10/12  bg-black z-10 flex justify-center items-center flex-col">
                <h1 className="text-white font-bold mt-5  text-2xl">{newValues?"Sign Up":"Sign In"}</h1>
                {newValues&&<input className="m-auto mt-5 mb-5 py-3 px-4 rounded bg-gray-700 w-8/12 text-white outline-none" placeholder="Full name"/>}
                <input ref={email} className="m-auto mt-5 mb-5 py-3 px-4 rounded bg-gray-700 w-8/12 text-white outline-none" placeholder="Email or phone number"/>
                <input ref={password} className="m-auto mt-5 mb-5 py-3 px-4 rounded bg-gray-700 w-8/12  text-white outline-none" placeholder="Password"/>
                <p className="font-bold text-red-500">{validMessage}</p>
                <button className="bg-red-600 m-auto mt-5 mb-5 py-3 px-4 rounded text-white font-bold w-8/12" onClick={handleValidate}>Sign In</button>
                <p className="text-gray-500 mb-5 mt-5 mr-32 flex">Click here for <button className="ml-2 hover:underline cursor-pointer text-white" onClick={handler}>{newValues?"Sing In":"Sign Up"}</button></p>
            </div>
        </div>
    )
}
export default SignInForm;



// w-4/12 absolute left-0 right-0 m-auto mt-52 flex justify-center flex-col bg-black h-6/12