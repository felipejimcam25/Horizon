import "../../styles/btn.css";

export default function Button ({ text, type }) {
    return (
        <button type={type} className="btn">{text}</button>
    )
}