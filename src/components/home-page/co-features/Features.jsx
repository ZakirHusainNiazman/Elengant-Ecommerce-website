import FeatureCard from "./FeatureCard";

import cssClasses from "./Features.module.css";

import lockIcon from "../../../../public/images/lock-icon.svg";


function Features() {

    return (
      <section className={`${cssClasses["co-features"]} container`}>
        <FeatureCard
          img={lockIcon}
          title="Free Shipping"
          subTitle="Order above $200"
        />
        <FeatureCard
          img={lockIcon}
          title="Free Shipping"
          subTitle="Order above $200"
        />
        <FeatureCard
          img={lockIcon}
          title="Free Shipping"
          subTitle="Order above $200"
        />
        <FeatureCard
          img={lockIcon}
          title="Free Shipping"
          subTitle="Order above $200"
        />
      </section>
    );
  }

export default Features