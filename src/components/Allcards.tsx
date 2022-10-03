import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../interfaces/Card";
import { deleteCard, getAllCards } from "../services/cardService";
import { errorMsg, successMsg } from "../services/feedbackService";
import { getBiz, getUserId } from "../services/userService";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface AllcardsProps {}

const Cards: FunctionComponent<AllcardsProps> = () => {
  // Checks if User Is Business
  const [isBiz, setIsBiz] = useState<boolean>(false);
  const [cards, setCards] = useState<Card[]>([]);
  useEffect(() => {
    setIsBiz(getBiz());
    getAllCards()
      .then((result) => {
        setCards(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="text-center mt-5 mb-5">
        <i className="fa-regular fa-address-card"></i> All BizCards
      </h1>
      <div className="container-fluid w-75 mb-5">
        <div className="row allCards">
          {cards.length ? (
            cards.map((card: Card) => {
              return (
                <div key={card.card_id} className="col-lg-4 card bizCard">
                  <div className="top">
                    <div className="col-lg-11 text-center">
                      <img
                        src={card.business_image}
                        className="card-img-top mx-auto"
                        alt="..."
                      />
                    </div>
                  </div>

                  <div className="card-body overflow">
                    <h3 className="card-title text-center">
                      {card.business_name}
                    </h3>
                    <hr />
                    <div className="card-text mb-2 mt-4 text-center">
                      {card.business_desc}
                    </div>
                    <hr />
                    <div className="card-text mb-2 text-center">
                      <i className="fa-solid fa-phone"></i>{" "}
                      {card.business_phone}
                    </div>
                    <hr />
                    <div className="card-text mb-2 text-center">
                      <i className="fa-solid fa-location-dot"></i>{" "}
                      {card.business_adress}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <h4 className="text-center mt-5">There are no Cards added..</h4>
              <img className="image img-fluid" src="nocards.png" alt="" />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cards;
