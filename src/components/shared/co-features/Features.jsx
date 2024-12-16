import FeatureCard from "../../../ui/features/FeatureCard";

import lockIcon from "../../../assets/ui-images/lock-icon.svg";
import creditCardIcon from "../../../assets/ui-images/credit-card-icon.svg";
import lockLcon from "../../../assets/ui-images/lock-icon.svg";
import callIcon from "../../../assets/ui-images/call-icon.svg";

import cssClasses from "./Features.module.css";


function Features({className}) {
  return (
    <section className={`${cssClasses["co-features"]} ${className}`}>
      <FeatureCard
        img={lockIcon}
        title="Free Shipping"
        subTitle="Order above $200"
      />
      <FeatureCard
        img={creditCardIcon}
        title="Money-back"
        subTitle="30 days guarantee"
      />
      <FeatureCard
        img={lockIcon}
        title="Secure Payments"
        subTitle="Secured by Stripe"
      />
      <FeatureCard
        img={lockIcon}
        title="24/7 Support"
        subTitle="Phone and Email support"
      />
    </section>
  );
}

export default Features;
