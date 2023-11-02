import "./marketanalysis.scss"
import {CalendarViewWeekRounded} from "@mui/icons-material";
import MarketBar from "./MarketBar.jsx";
import "./marketanalysis.scss"
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function MarketAnalysisCard()
{
    return(


        <div className='market-card'>
            <div className='top'>
                <div className='t-1'>Market Analysis</div>
                <div className='t-2'>View Report</div>
            </div>
            <div className="date">
                <div style={{marginRight:'2%'}}>Market data from 1st-31st Dec, 2022 </div>
                <div style={{cursor:'pointer'}}><CalendarTodayOutlinedIcon/></div>

            </div>
            <div className='chart'>
                <MarketBar/>
            </div>
        </div>
    )
}


