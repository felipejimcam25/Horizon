import { formatMoney } from "../../services/bankService";
import { userBalance } from "../../services/bankService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faDollarSign } from "@fortawesome/free-solid-svg-icons";

import "../../styles/Global.css";
import "../../styles/Dashboard.css";
import logo from "../../assets/logo/Logo.png";
import BalanceCard from "../../components/ui/BalanceCard";
import PaymentMethod from "../../components/ui/PaymentMethods"




/*
TODO : 
-> Interface Head and body of the dashboard
-> Control the balance with user's information in LS
-> 

*/


export function Dashboard () {
    const balance = userBalance();

    return (
        <>
        
        <section className="dashboard">
            <article className="headContent container">
                <span className="headTitle">Welcome to <img src={logo} alt="" />!</span>
                <span className="headSubtitle">With Horizon, your goals have no limits</span>
            </article>

            <article className="balanceBody container">
                <BalanceCard 
                title="Total Balance"
                icon={faChartLine}
                value={formatMoney(balance)}
                percentage={10}
                trend="up"
                link="/balance"
                /> 

                <BalanceCard 
                title="Spend"
                icon={faDollarSign}
                value={formatMoney(balance)}
                percentage={10}
                trend="down"
                link="/spend"
                /> 
            </article>
            <PaymentMethod />
        </section>

        </>

    )
}