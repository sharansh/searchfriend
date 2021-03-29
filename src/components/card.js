import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash  } from '@fortawesome/free-solid-svg-icons';

const elementstar = <FontAwesomeIcon icon={faStar} />
const elementdelete = <FontAwesomeIcon icon={faTrash} />

function Card(props) {
  return (
    <div className="list-group-item">
      <span className="float-left">{props.name}</span>
      <button className="float-right deleteButton" onClick={() => {}}>{elementstar}</button>
      <button className="float-right deleteButton" onClick={props.delete}>{elementdelete}</button>
  </div>
  );
}

export default Card;
