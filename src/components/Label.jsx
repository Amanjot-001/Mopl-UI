import downArrow from '../assets/svg/arrow-down-solid.svg'

export default function Label() {
    return (
        <div className="label">
            <div className="arrow">
                <img src={downArrow} alt="down-arrow" />
            </div>
            <div className='text'>Features</div>
        </div>
    )
}