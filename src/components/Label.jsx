import '../styles/Label.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Label({heading}) {
    return (
        <div className="label">
            <div className="arrow">
                <FontAwesomeIcon icon = {faArrowDown} />
            </div>
            <div className='text'>{heading}</div>
        </div>
    )
}