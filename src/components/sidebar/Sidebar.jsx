import "./sidebar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import {
    ArrowCircleLeft,
    ArrowCircleRight, BiotechOutlined,
    DonutSmallOutlined,
    LocationOnOutlined,
    WaterDrop
} from "@mui/icons-material";
import AirIcon from '@mui/icons-material/Air';
import {Link} from "react-router-dom";

export default  function Sidebar() {
    return(
        <div className="sidebar">

            <div className="nametags">
                <div className="pact">
                    <DashboardOutlinedIcon/>
                    <div className="name">
                        Dashboard
                    </div>
                </div>

                <div className="pact">
                    <BiotechOutlined/>
                    <div className="name">
                       <Link to="/cropclinic" style={{textDecoration:"none",color:"inherit"}}>Crop Clinic</Link>
                    </div>
                </div>

                <div className="pact">
                    <DonutSmallOutlined/>
                    <div className="name">
                        <Link to="/reports" style={{textDecoration:"none",color:"inherit"}}> Reports</Link>
                    </div>
                </div>

            </div>
            <div className="weather-box">
                <div className='location'>
                    <div className='l-icon'> <LocationOnOutlined/> </div>
                    <div className='l-name'>Malanje, Angola</div>
                </div>
                <div className='weather-value'>29&#176;</div>
                <div className='weather-dets'>
                    <div className='side-arrow'>
                       <ArrowCircleLeft />
                        </div>
                    <div className='more-dets'>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'5%',marginTop:'2%',fontWeight:'bold'}}>
                            <span>Today</span>
                            9 December
                        </div>
                        <div className='latitudes'>
                            Lat -9.7865
                            <br/>
                            Long 8.0896
                        </div>
                        <div className='extra'>
                            <div className='f-sect'>
                                <div className='w-1'>
                                    <div className='w-1-icon'> <AirIcon/> </div>
                                    <div className='w-1-text'>Wind</div>
                                </div>
                                <div className='w-2-text'>11km/h</div>
                            </div>

                            <div className='f-sect'>
                                <div className='w-1'>
                                    <div className='w-1-icon'> <WaterDrop/> </div>
                                    <div className='w-1-text'>Precip</div>
                                </div>
                                <div className='w-2-text'>22mm</div>
                            </div>

                        </div>
                    </div>
                    <div className='side-arrow'> <ArrowCircleRight/></div>
                </div>

            </div>

            <div className="person">
                <img src='https://images.pexels.com/photos/3799124/pexels-photo-3799124.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Missing'/>
                <div className='name'>
                    <div className='names'>
                        Milton Sebastio
                    </div>
                    <div className='email'>milton@dottera.co</div>
                </div>

            </div>

        </div>

    )
}