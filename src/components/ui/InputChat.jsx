import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputChat ({ type, id, placeholder, icon }) {

    return (
        <div className="inputChat">
            <label htmlFor={id}>{icon && <FontAwesomeIcon icon={icon} />}</label>
            <input type={type} placeholder={placeholder} id={id}  />
        </div>
    )

}