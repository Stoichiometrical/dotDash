import './report.scss'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
export default function Report(){
    return(
        <div className='reports'>
            <div className='t'>
                <div className='name'>
                    Dece 2022
                </div>
                <div className='desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque place.......
                </div>
            </div>
            <FileDownloadOutlinedIcon style={{color:'green',cursor:'pointer'}}/>

        </div>
    )
}