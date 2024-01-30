import Header from "./Header";
import SignInForm from "./SignInForm";
import { backgroundImage_url } from "../utils/constants";
const login = () => {
    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="" src={backgroundImage_url} alt="bg-image" />
            </div>
            <SignInForm/>
        </div>
    )
}
export default login;