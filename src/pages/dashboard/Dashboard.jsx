import "./dash.scss"
import img from './../../assets/im2.png'
import {WbSunny} from "@mui/icons-material";
import MarketBar from "../../components/marketanalysis/MarketBar.jsx";
import Card from "../../components/marketanalysis/Card.jsx";
import SensorData from "../../components/sensordata/SensorData.jsx";
import Report from "../../components/report/Report.jsx";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArticleCard from "../../components/card/ArticleCard.jsx";
import grapes from '../../assets/grapes.png'
import watermelon from  '../../assets/watermelon.png'
import oranges from '../../assets/oranges.png'



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
            <div className='condition-cards'>
                {/*<ConditionCard phLevel='7' alkalineLevel='9' />*/}

            </div>
            <Card title="Market Analysis" chart={<MarketBar/>} period="Market data from 1st-31st Dec, 2022"/>
            <Card title="Sensor data" chart={<SensorData/>} period="Jan 2022- December 2023"/>

            <div className='reports-sect'>
                <h3>Recent Reports</h3>
                <div className='reports-h'>
                    <Report/>
                    <Report/>
                    <Report/>
                    <Report/>
                    <Report/>
                </div>
            </div>

            <div className='articles'>
                <div className='articles-header'>
                    <h3>Growing Strong</h3>
                    <div className='see-all'>
                        <div className='text'>See All</div>
                        <KeyboardArrowDownOutlinedIcon/>

                    </div>
                </div>
                <div className='articles-subheader'>Articles on cultivating healthy and abundant crops</div>
                <div className='article-cards'>
                    <ArticleCard im={grapes} title='Grapes'/>
                    <ArticleCard im={watermelon} title='Watermelon'/>
                    <ArticleCard im={oranges} title='Oranges'/>
                </div>

                <div className='satelite'>
                    <h3>Satelite Image For Pest Control</h3>
                    <img src='https://images.pexels.com/photos/2264699/pexels-photo-2264699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Missing'/>

                </div>



            </div>









        </div>
    )
}

