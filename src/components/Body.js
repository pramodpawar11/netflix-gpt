import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse.js";
import Login from "./Login.js";
import { useDispatch } from "react-redux";

const Body = ()=>{
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);
   
    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body;