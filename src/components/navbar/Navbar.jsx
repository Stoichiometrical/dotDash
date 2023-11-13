import Searchbar from "../searchbar/Searchbar.jsx";
import im from "../../assets/im.png"
import "./navbar.scss"
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useAuth } from "../../utils/AuthContext.jsx";

export default function Navbar() {
    const { user } = useAuth(); 


    return (
        <div className="navbar">
            <div className="logo">
                <img src={im} alt="Missing" />
            </div>
            <div className="welcome-text">
                Welcome back, {user.fullName}
            </div>
            <div className="search-bar">
                <Searchbar />
            </div>
            <div className="date">
                <div className="icon">

                    <CalendarTodayOutlinedIcon />
                </div>
                <div className="date-text">
                    Tue, 24 October 2023
                </div>
            </div>
        </div>
    )
}
