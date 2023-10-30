import "./sidebar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import {ArrowCircleLeft, ArrowCircleRight} from "@mui/icons-material";

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
                    <DashboardOutlinedIcon/>
                    <div className="name">
                        Crop Clinic
                    </div>
                </div>

                <div className="pact">
                    <DashboardOutlinedIcon/>
                    <div className="name">
                        Reports
                    </div>
                </div>

            </div>
            <div className="weather-box">
                <div className='location'>
                    <div className='l-icon'>ICON</div>
                    <div className='l-name'>Malanje, Angola</div>
                </div>
                <div className='weather-value'>29</div>
                <div className='weather-dets'>
                    <div className='side-arrow'>
                       <ArrowCircleLeft/>
                        </div>
                    <div className='more-dets'>
                        <div>
                            Today;
                            <br/>
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
                                    <div className='w-1-icon'>ICON</div>
                                    <div className='w-1-text'>WIND</div>
                                </div>

                                <div className='w-1'>
                                    <div className='w-1-icon'>ICON</div>
                                    <div className='w-1-text'>WIND</div>
                                </div>
                            </div>

                            <div className='f-sect'>
                                <div className='w-2-text'>11km/h</div>
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