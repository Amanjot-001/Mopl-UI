import '../styles/Label.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Label({ heading, rightPart = false, btns }) {
    return (
        <div className="label">
            <div className="left">
                <div className="arrow">
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
                <div className='text'>{heading}</div>
            </div>
            {rightPart && (
                <div className="right">
                    {btns.map((btn, index) => (
                        <div key={index} className={btn}>
                            {btn}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}