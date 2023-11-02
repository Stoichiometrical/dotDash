import './ccard.scss'
import grapes from '../../assets/grapes.png'

export default function ArticleCard({im,title}){
    return(
        <div className='article-card'>
            <img src={im} alt='Missing' className='space'/>
            <div className='card-head space'>{title}</div>
            <div className='card-desc space'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat tellus interdum mi placerat</div>
        </div>

    )
}