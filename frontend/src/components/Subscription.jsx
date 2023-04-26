import { Link } from "react-router-dom";
import SubscriptionCard from "./SubscriptionCard";
import backarrow from "../assets/back-arrow.svg";

function Subscription() {
  return (
    <div className="subscription-cards">
      <div className="arrow-title">
        <Link to="/">
          <img className="backarrow" src={backarrow} alt="backarrow" />
        </Link>{" "}
        <h2>Chose your subscription</h2>
      </div>

      <p>
        Get access to all our workout programs and an endless list of healthy
        recipes to get in the shape of your life.
      </p>
      <SubscriptionCard rythm="Monthly" price="$4.99 / month" />
      <SubscriptionCard
        rythm="Annual"
        price="$49.99 / year"
        save="save $9.89"
      />
    </div>
  );
}

export default Subscription;
