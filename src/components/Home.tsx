import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <section id="title">
        <div className="container-fluid content">
          {/* Title */}

          <div className="row">
            <div className="col-lg-6">
              <h1 className="big-text mt-4 mb-4">
                Every business owner needs a business card. "BizCards" makes the
                creative process super fast and easy with our free online web
                business card maker.
              </h1>
              <div className="buttons">
                <div className="row">
                  <Link
                    to={"/signin"}
                    className="col-lg-3 btn btn-dark mx-1 homeBtn"
                  >
                    <i className="fa-solid fa-key"></i> Sign in
                  </Link>
                  <Link
                    to={"/signup"}
                    className="col-lg-3 btn btn-dark mx-1 homeBtn"
                  >
                    <i className="fa-solid fa-user-plus"></i> Sign up
                  </Link>
                  <Link
                    to={"/about"}
                    className="col-lg-3 btn btn-outline-dark mx-1 homeBtn"
                  >
                    <i className="fa-solid fa-circle-info"></i> About
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                className="image devicesImg img-fluid"
                src="bizcards.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave IMG */}
      <div className="waveDiv">
        <img className="wave" src="wave.png" alt="" />
      </div>
      {/* Features */}
      <section id="features">
        <div className="row">
          <div className="feature-box col-lg-4">
            <i className="icon fas fa-play-circle fa-3x"></i>
            <h3>Easy to use</h3>
            <p>Create card to your business in less then a minute!</p>
          </div>
          <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-users fa-3x"></i>
            <h3>Huge exposure!</h3>
            <p>
              BizCards got 250k Users all over the world! (and keep growing)
              Expose your business Today!
            </p>
          </div>
          <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-headset fa-3x"></i>
            <h3>Get Leads</h3>
            <p>Share your BizCard Today, and get leads Tomorrow!</p>
          </div>
        </div>
        <div className="row">
          <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-share-nodes fa-3x"></i>
            <h3>Sharing is Caring</h3>
            <p>
              Easily share your digital card With anyone using a QR code or your
              share button at the top of your card
            </p>
          </div>
          <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-leaf fa-3x"></i>
            <h3>Save the Planet</h3>
            <p>Save our planet by using less paper and more Digital.</p>
          </div>
          <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-comments-dollar fa-3x"></i>
            <h3>Free Benefit</h3>
            <p>Benefit from a free version of the BizCards.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}

      <section id="pricing">
        <h1 className="text-dark">Share your BizCard with the world.</h1>
        <p className="text-dark">Choose your BizCards plan.</p>

        <div className="row">
          <div className="pricing-col col-lg-6 col col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="mt-2">Basic Plan</h3>
              </div>
              <div className="card-body">
                <h2>Free</h2>
                <p>
                  <i className="icon fas fa-check"></i> Create up to 3 BizCards
                </p>
                <p>
                  <i className="icon fas fa-check"></i> Get free support for the
                  first week!
                </p>
                <p>
                  <i className="icon fas fa-check"></i> Access basic insights
                </p>
                <Link to="/signup">
                  <button type="button" className="btn btn-dark">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="pricing-col col-lg-6 col-md-6">
            <div className=" card">
              <div className="card-header">
                <h3 className="mt-2">Unlimited Plan</h3>
              </div>
              <div className="card-body">
                <h2>$12 / mo</h2>
                <p>
                  <i className="icon fas fa-check"></i> Create unlimited
                  BizCards!
                </p>
                <p>
                  <i className="icon fas fa-check"></i> Get unlimited 24/7
                  Online support!
                </p>
                <p>
                  <i className="icon fas fa-check"></i> Access advanced audience
                  insights
                </p>
                <Link to="/signup">
                  {" "}
                  <button type="button" className="btn btn-dark">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
