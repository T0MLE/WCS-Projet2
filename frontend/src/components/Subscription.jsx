import SubscriptionCard from "./SubscriptionCard";

function Subscription() {
  return (
    <div className="subscription-cards">
      <div>
        <h2>Choose your subscription</h2>
        <p>
          Get access to all our workout programs and an endless list of healthy
          recipes to get in the shape of your life.
        </p>
      </div>
      <div>
        <SubscriptionCard rythm="Monthly" price="$4.99 / month" />
        <SubscriptionCard
          rythm="Annual"
          price="$49.99 / year"
          save="save $9.89"
        />
      </div>
    </div>
  );
}

export default Subscription;
