import React from 'react';
import D from "../images/dawood.png";
import { Link } from 'react-router-dom';
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
const ReviewList = () => {
  const reviews = [
    { 
      name: "Dawood Waseem", 
      review: "Life-changing! I’ve always struggled to keep track of my meals and nutrition, but NutriTrack makes it so simple!", 
      image: D 
    },
    { 
      name: "Ali Khan", 
      review: "Great for busy schedules! NutriTrack has made meal planning so much easier for my hectic work life.", 
      image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" 
    },
    { 
      name: "Fatima Noor", 
      review: "A must-have for health enthusiasts! This app is a game-changer!", 
      image: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" 
    }
  ];

  return reviews.map((review, index) => (
    <div className="col-lg-4" key={index}>
      <div className="trainer-item">
        <div className="image-thumb">
          <img src={review.image} alt={review.name} />
        </div>
        <div className="down-content">
          <span>NutriTrack User</span>
          <h4>{review.name}</h4>
          <p>{review.review}</p>
          <ul className="social-icons">
            <li><Link to="/"><i className="fa fa-facebook"></i></Link></li>
            <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
            <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>
  ));
};

export default ReviewList;
