import { Outlet } from "react-router-dom";
import Navber from "../Component/Pages/Navber";

const Root = () => {
    return (
        <div className="container m-auto">
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Root;