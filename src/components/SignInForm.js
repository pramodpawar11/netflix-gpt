import { useState, useRef } from "react";
import CheckValidate from "../utils/checkValidate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/fireBase"
import {  useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const SignInForm = () => {
    const [signUpIn, setsignUpIn] = useState(false);
    const [validMessage, setvalidMessage] = useState(null);
    const dispatch = useDispatch();
    const email = useRef(null);
    const name = useRef(null);
    const password = useRef(null);
    function handler() {
        setsignUpIn(!signUpIn);
    }
    function handleValidate() {
        const message = CheckValidate(email.current.value, password.current.value);
        setvalidMessage(message);
        if (message) return;
        if (signUpIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                            const {uid,email,displayName} = auth.currentUser;
                            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setvalidMessage(errorCode + errorMessage);
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setvalidMessage("User is not defined");
                });
        }

    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-4/12 h-10/12  bg-black z-10 flex justify-center items-center flex-col">
                <h1 className="text-white font-bold mt-5  text-2xl">{signUpIn ? "Sign Up" : "Sign In"}</h1>
                {signUpIn && <input ref={name} className="m-auto mt-5 mb-5 py-3 px-4 rounded bg-gray-700 w-8/12 text-white outline-none" placeholder="Full name" />}
                <input type="email" ref={email} className="m-auto mt-5 mb-5 py-3 px-4 rounded bg-gray-700 w-8/12 text-white outline-none" placeholder="Email or phone number" />
                <input type="password" ref={password} className="m-auto mt-5 mb-5 py-3 px-4 rounded bg-gray-700 w-8/12  text-white outline-none" placeholder="Password" />
                <p className="font-bold text-red-500">{validMessage}</p>
                <button className="bg-red-600 m-auto mt-5 mb-5 py-3 px-4 rounded text-white font-bold w-8/12" onClick={handleValidate}>{signUpIn ? "Sing up" : "Sing in"}</button>
                <p className="text-gray-500 mb-5 mt-5 mr-32 flex">Click here for <button className="ml-2 hover:underline cursor-pointer text-white" onClick={handler}>{signUpIn ? "Sing In" : "Sign Up"}</button></p>
            </div>
        </div>
    )
}
export default SignInForm;



// w-4/12 absolute left-0 right-0 m-auto mt-52 flex justify-center flex-col bg-black h-6/12