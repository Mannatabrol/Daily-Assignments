// work card has been updated.
//an array of items are updated usning cards in the work.js landing page.
//external css has bee  applied   using work.css on the cards.

import React from "react";
import "./Work.css"; // Import your external CSS file
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const WorkCard = ({ image, title, text }) => {
  return (
    <div className="work-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick the crispy bite.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Enjoy the taste",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Food would be delivered in just 20 minutes",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We assure to provide high quality and tasty food to our customers.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <WorkCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Work;
