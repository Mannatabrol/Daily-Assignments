import React from "react";
import ProfilePic from "../Assets/Sanjeevkapoor.jpeg"
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Let's see what our customers say</h1>
        <p className="primary-text">
          We have our  regular customers from different areas.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        The food here is very tasty and one of the best resturant in city.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Sanjeev Kapoor</h2>
      </div>
    </div>
  );
};

export default Testimonial;
