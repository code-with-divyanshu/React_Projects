import React, { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClickEvent = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseOverEvent = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeaveEvent = () => {
    setHover(rating);
  };

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClickEvent(index)}
            onMouseOver={() => handleMouseOverEvent(index)}
            onMouseLeave={() => handleMouseLeaveEvent()}
            size={40}
          />
        );
      })}
    </div>
  );
}
