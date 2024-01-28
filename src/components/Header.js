import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
const Header = ()=>{
    const nevigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    
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
        <div className="py-2 px-2 absolute  bg-gradient-to-b from-black z-10 flex justify-between items-center w-full">
            <img className="h-20" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="img" />    
            { user && (<div>
                <button className="bg-red-700 text-white py-2 px-3 rounded-xl" onClick={handleSignout}>SignOut</button>
            </div>)}
        </div>
    )
}
export default Header;