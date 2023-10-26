import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSurprise, faFaceSmileWink, faFaceGrinHearts } from '@fortawesome/free-regular-svg-icons';

const iconMap = {
  surprise: faFaceSurprise,
  wink: faFaceSmileWink,
  heart: faFaceGrinHearts,
};

export default function Card({ heading, imgSource }) {
  const icon = iconMap[imgSource.toLowerCase()];

  return (
    <div className="card">
      <div className="img">
        {icon && <FontAwesomeIcon icon={icon} />}
      </div>
      <div className="heading">{heading}</div>
    </div>
  );
}