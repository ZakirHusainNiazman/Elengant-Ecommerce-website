import cssClasses from "../components/contact-page/ContactPage.module.css";
import Path from "../ui/hero-section/Path.jsx";
import Banner from "../ui/banner/Banner";
import FeatureCard from "../ui/features/FeatureCard.jsx";
import Input from '../ui/input/Input.jsx'
import Button from '../ui/buttons/Button.jsx';

import callIcon from "../assets/ui-images/call-icon.svg";
import homeIcon from "../assets/ui-images/home-icon.svg";
import emailIcon from "../assets/ui-images/mail-icon.svg";
import Textarea from "../ui/textarea/Textarea.jsx";
import Features from "../components/shared/co-features/Features.jsx";


function ContactPage() {
  return (
    <>
      <div className="container">
        <header className={cssClasses["header"]}>
          <Path array={["Home", "Contact Us"]} />
          <h1 className={cssClasses.title}>
            We believe in sustainable decor. We’re passionate about life at
            home.
          </h1>
          <p className={cssClasses.body}>
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </header>
        <Banner
          title="About Us"
          body="3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. 
              Our customer service is always prepared to support you 24/7"
        />
        <div className={cssClasses["contact-section"]}>
          <h2 className={cssClasses["contact-title"]}>Contact Us</h2>
          <div className={cssClasses["info-card-wrapper"]}>
            <FeatureCard
              img={homeIcon}
              title="Address"
              subTitle="234 Hai Trieu, Ho Chi Minh City, Viet Nam"
              className={cssClasses["feature-card"]}
            />

            <FeatureCard
              img={callIcon}
              title="Contact Us"
              subTitle="+84 234 567 890"
              className={cssClasses["feature-card"]}
            />
            <FeatureCard
              img={emailIcon}
              title="Email"
              subTitle="hello@3legant.com"
              className={cssClasses["feature-card"]}
            />
          </div>
          <div className={cssClasses["contact-form-wrapper"]}>
            <form action="" className={cssClasses.form}>
              <Input label="Full Name" name="name" placeholder="Your Name" />
              <Input
                label="Email address"
                name="email"
                placeholder="Your Email"
              />
              <Textarea
                name="message"
                label="message"
                placeholder="Your message"
              />
              <Button className={cssClasses["msg-btn"]}>Send Message</Button>
            </form>
            <div className={cssClasses["map-wrapper"]}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420609.4732684264!2d68.86807977398274!3d34.553263962696256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d1694c3c1e6d49%3A0xebdf473578214429!2sKabul%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1732885844680!5m2!1sen!2s"
                width="100%"
                height="404"
                className="home"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Features className={cssClasses["co-features-wrapper"]} />
    </>
  );
}

export default ContactPage;
