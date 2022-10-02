import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    sessionStorage.setItem("ratingValue", JSON.stringify(value));
  };
  const handleClear = () => {
    setRating(null);
    sessionStorage.clear();
  };
  useEffect(() => {
    setRating(JSON.parse(sessionStorage.getItem("ratingValue")));
  }, []);
  return (
    <div>
      <div>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
                onChange={(e) => handleChange(e)}
              />
              <FaStar
                className="star"
                size={100}
                color={ratingValue <= (hover || rating) ? "gold" : "grey"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <button className="btn" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};
export default StarRating;
