import cardHorizon from "../../assets/images/bankCards/horizonCard.jpg";
import blackCard from "../../assets/images/bankCards/blackcard.png";
import whiteCard from "../../assets/images/bankCards/whiteCard.png";
import "../../styles/Dashboard.css";

export default function PaymentMethod () {
    return (
        <article className="paymentMethods container">
            <div class="paymentTitleWrapper">
                <h2 className="paymentTitle">Payment Methods</h2>
            </div>

            <div class="cards-stack">
                <img src={cardHorizon} alt="Horizon VIP Card"  className="cardImage card-top" />
                <img src={blackCard} alt="Horizon Black Card"  className="cardImage card-middle" />
                <img src={whiteCard} alt="Horizon simple Card" className="cardImage card-bottom"  />
            </div>

        </article>
    )
}