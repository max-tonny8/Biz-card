import { FunctionComponent } from "react";
import Footer from "./Footer";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <div className="container-fluid content">
        <div className="row">
          <div
            className="col-lg-6 mt-5"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1>What is a digital business card?</h1>
            <p>
              Digital business cards are the modern way to share contact
              information. Also known as virtual and electronic business cards,
              digital business cards are more interactive, cost-effective, and
              sustainable than their physical counterparts. One significant
              benefit of digital business cards is that they can be shared with
              anyone, anywhere. HiHello’s digital business cards can be created
              on iOS, Android, or computer and can be completely customized to
              fit your style.
            </p>
          </div>
          <div
            className="col-lg-6 mt-5 center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <img className="image img-fluid " src="card1.png" alt="" />
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-6 mt-5 center"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <img className="image img-fluid" src="card2.png" alt="" />
          </div>
          <div
            className="col-lg-6 mt-5"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <h1>How do BizCards digital cards work?</h1>
            <p>
              BizCards digital business cards are free, completely customizable,
              and you can share your card with anyone—no app is required to
              receive a card. After you sign up you’ll be able to create and
              personalize your first virtual business card. You can create
              multiple cards with different information on each card. Make a
              card for work contacts, one for clients or customers, and one for
              your friends.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mt-5" data-aos="fade-left">
            <h1>The best contactless business card.</h1>
            <p>
              BizCards digital business cards are germ-free—no physical contact
              is necessary to send or receive a virtual card. Electronic
              business cards can be shared with anyone, anywhere, anytime. Using
              a digital business card means you can update your information with
              a single tap, so you don’t need to go through ordering and
              shipping new cards.
            </p>
          </div>
          <div className="col-lg-6 mt-5 center" data-aos="fade-left">
            {" "}
            <img className="image img-fluid" src="card3.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
