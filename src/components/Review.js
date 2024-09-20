import React from "react";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png";
const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={qouteImg} alt="" className="quote" />
              <p>
                Absolutely love this app! The variety of food choices is
                amazing, and the delivery is always on time. The tracking
                feature is so helpful—I can always see where my food is and how
                long it will take.
              </p>
              <img src={item.img} className="user" alt="" />
              <h3>john</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
