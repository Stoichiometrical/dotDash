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
import { useAuth } from "../../utils/AuthContext.jsx";
import {getWeatherData} from '../../utils/utilityFunction';
import { useState , useEffect} from "react";


export default  function Sidebar() {
    const { user } = useAuth(); 
    
    
    const formatTodayDate = () => {
        const options = { day: 'numeric', month: 'long' };
        const today = new Date();
        return today.toLocaleDateString('en-US', options);
      };

    const [weatherData, setWeatherData] = useState(null);
    console.log(weatherData)

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherData('Malanje'); // Replace with your desired city
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
      }
    };

    fetchWeatherData();
  }, []);


    return(
        <div className="sidebar">

            <div className="nametags">
                <div className="pact">
                    <DashboardOutlinedIcon/>
                    <div className="name">
                        <Link to="/dash" style={{textDecoration:"none",color:"inherit"}}> Dashboard</Link>
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
                {
                    weatherData && (
                        <div className='weather-value'>{ weatherData? weatherData.temp_c: "Missing"}&#176;</div>

                    )

                }
                
                <div className='weather-dets'>
                    <div className='side-arrow'>
                       <ArrowCircleLeft />
                        </div>
                    <div className='more-dets'>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'5%',marginTop:'2%',fontWeight:'bold'}}>
                            <span>Today</span>
                            {formatTodayDate()}
                        </div>
                        <div className='latitudes'>
                            Lat { weatherData ? weatherData.latitude : "-9.7865" }
                            <br/>
                            Long { weatherData ? weatherData.longitude : "-9.7865" }
                        </div>
                        <div className='extra'>
                            <div className='f-sect'>
                                <div className='w-1'>
                                    <div className='w-1-icon'> <AirIcon/> </div>
                                    <div className='w-1-text'>Wind</div>
                                </div>
                                <div className='w-2-text'>{ weatherData ? weatherData.wind_kph + "kph" : "Missing" }</div>
                            </div>

                            <div className='f-sect'>
                                <div className='w-1'>
                                    <div className='w-1-icon'> <WaterDrop/> </div>
                                    <div className='w-1-text'>Precip</div>
                                </div>
                                <div className='w-2-text'>{ weatherData ? weatherData.precip_mm + "mm" : "Missing" }</div>
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
                       {user.fullName}
                    </div>
                    <div className='email'>{user.email}</div>
                </div>

            </div>

        </div>

    )
}

