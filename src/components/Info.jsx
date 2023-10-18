import '../App.css'
import locationIcon from '../assets/location-icon.png'

export default function Info(props){
    return(
        <div className='info flex'>       
            <img src={props.img} alt=" Info Img" className='info--img'/>
            <div className='info--details'>
                <div className='info-location flex font-size-12'>
                    <div className='info--country-icon flex '>
                        <img src={locationIcon} alt="" className='info--location-icon'/>
                        <p className='info--country'>{props.country}</p>
                    </div>
                    <a className='info--map' href={props.link} rel="noopener noreferrer" target="_blank">View on Google Map</a>
                </div>
                <h1 className='info--title'>{props.title}</h1>
                <p className='info-date font-size-12'>{props.startDate} - {props.endDate}</p>
                <p className='info-description font-size-12'>{props.description}</p>
            </div>
        </div>
    )
}