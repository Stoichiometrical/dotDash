import Searchbar from "../searchbar/Searchbar.jsx";
import im from "../../assets/im.png"
import "./navbar.scss"
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={im} alt="Missing" />
            </div>
            <div className="welcome-text">
                Welcome back, Milton!
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
