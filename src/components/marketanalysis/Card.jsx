import "./marketanalysis.scss"
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

export default function Card({title,chart,period})
{
    return(


        <div className='market-card'>
            <div className='top'>
                <div className='t-1'>{title}</div>
                <div className='t-2'>View Report</div>
            </div>
            <div className="date">
                <div style={{marginRight:'2%'}}>{period} </div>
                <div style={{cursor:'pointer'}}><CalendarTodayOutlinedIcon/></div>

            </div>
            <div className='chart'>
                {chart}
            </div>
        </div>
    )
}


