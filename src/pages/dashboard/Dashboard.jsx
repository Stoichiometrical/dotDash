import "./dash.scss"
import img from './../../assets/im2.png'
import {WbSunny} from "@mui/icons-material";
import ConditionCard from "../../components/card/ConditionCard.jsx";


export default function Dashboard(){
    return(
        <div className="dash">
            <div className='top-image'>
                <div className='weather-cond'>
                    <WbSunny/>
                    <span>26&#176;</span>
                    <span>It’s a Sunny Day today!</span>
                </div>
                <div className='top-img-text'>
                    Sunshine and hydration, the perfect recipe for a bountiful harvest
                </div>
                <img src={img} alt='Missing'/>
            </div>
            <div className='condition-cards'>
                <ConditionCard phLevel='7' alkalineLevel='9' />

            </div>





        </div>
    )
}

