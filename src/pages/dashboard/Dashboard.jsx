import "./dash.scss"
import img from './../../assets/im2.png'
import {WbSunny} from "@mui/icons-material";
import MarketAnalysisCard from "../../components/marketanalysis/MarketAnalysis.jsx";
import MarketBar from "../../components/marketanalysis/MarketBar.jsx";
import Card from "../../components/marketanalysis/Card.jsx";
import SensorData from "../../components/sensordata/SensorData.jsx";
// import ConditionCard from "../../components/card/ConditionCard.jsx";


export default function Dashboard(){
    return(
        <div className="dash">
            <div className='top-image'>
                <div className="text">
                    <div className='weather-cond'>
                        <div>
                            <WbSunny/>
                            <div>26&#176;</div>
                        </div>
                        <span>It’s a Sunny Day today!</span>
                    </div>
                    <div className='top-img-text'>
                        Sunshine and hydration, the perfect recipe for a bountiful harvest
                    </div>
                </div>
                <img src={img} alt='Missing'/>
            </div>

            <Card title="Market Analysis" chart={<MarketBar/>} period="Market data from 1st-31st Dec, 2022"/>
            <Card title="Sensor data" chart={<SensorData/>} period="Jan 2022- December 2023"/>


            <div className='condition-cards'>
                {/*<ConditionCard phLevel='7' alkalineLevel='9' />*/}

            </div>





        </div>
    )
}

