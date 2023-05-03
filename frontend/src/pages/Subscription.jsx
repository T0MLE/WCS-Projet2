import SubscriptionCard from "../components/SubscriptionCard";

function Subscription() {
  return (
    <div className="subscription-cards">
      <h2>Choose your subscription</h2>

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
