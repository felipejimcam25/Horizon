import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom"; 

export default function BalanceCard({
    title, 
    icon, 
    percentage,
    value,
    trend,
    link
}) {
    return (
        <div className="balanceCard">
                    <div className="cardHead">
                        <span>{title}</span>
                        <div className="iconCircle">
                            <FontAwesomeIcon 
                            icon={icon} 
                            className="balanceIcon"
                            />
                        </div>
                    </div>
                    <span className="userBalance">{value}</span>
                    <div className="balancePor">
                        <div class={trend === "up" ? "profit" : "spend"}>
                            <FontAwesomeIcon 
                            icon={trend === "up" ? faArrowTrendUp : faArrowTrendDown} 
                            className={`${trend}Icon`}
                            />
                            <span class="profitText">{trend === "up" ? "+" : "-"}{percentage}%</span>
                        </div>
                        <div class="more">
                            <Link to={link} className="moreBtn">More Details</Link>
                        </div>
                    </div>
                </div>
    )
}