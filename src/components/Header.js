import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useRef } from "react";
import { BiBluetooth, BiLogOut ,BiSearchAlt} from "react-icons/bi";
import { changeSearchBar } from "../utils/gptSlice";
import { config } from "@fortawesome/fontawesome-svg-core";
import { changeLanguage } from "../utils/configSlice";

const Header = ()=>{
    const nevigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    function handleSearchBar(){
        dispatch(changeSearchBar());
    }
    function setValue(e){
        dispatch(changeLanguage(e.target.value))
    }
    function handleSignout() {
        signOut(auth).then(() => {
            nevigate('/');
        }).catch((error) => {
        });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                nevigate("/browse")
            } else {
                dispatch(removeUser());
                nevigate("/")
            }
          });
    },[])
    return(
        <div className="py-2 px-2 absolute  bg-gradient-to-b from-black z-10 flex justify-between items-center w-full h-24">
            <img className="h-20" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="img" />    
            { user && (<div className="flex items-center ">
                <select className="bg-black text-white py-2 px-3" onChange={setValue}>
                    <option value="english" className="">English</option>
                    <option value="hindi">Hindi</option>
                </select>
                <button className="text-white py-2 px-3  text-4xl font-bold rounded-3xl mr-16" onClick={handleSearchBar}><BiSearchAlt /></button>
                <button className="text-white py-2 px-3  text-4xl bg-red-700 rounded-3xl" onClick={handleSignout}><BiLogOut /></button>
            </div>)}
        </div>
    )
}
export default Header;