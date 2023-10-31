import "./dashframe.scss"
import Navbar from "../navbar/Navbar.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";

export default  function DashboardFrame({ contents }){
    return(
        <div className="dash">
            <div className="nav">
                <Navbar/>
            </div>
            <div className="dash-body">
                <div className="side">
                    <Sidebar/>
                </div>
                <div className="main">
                    { contents }
                </div>
            </div>


        </div>
    )
}

