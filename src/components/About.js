import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
              Bitebuddy is an online food ordering and delivery company in India
              that also offers quick commerce and same-day package delivery
              services. Bitebuddy offers food delivery, quick commerce, and
              same-day package delivery. Bitebuddy operates in over 580 Indian
              cities.
            </p>
            <p>
              Bitebuddy offers a live tracking feature that shows the delivery
              agent's location and an estimated delivery time.Bitebuddy partners
              with hundreds of thousands of restaurants. Bitebuddy has a fleet
              of over 2 lakh independent delivery executives.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
