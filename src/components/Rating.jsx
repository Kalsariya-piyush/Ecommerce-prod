import { useState } from 'react';
import { WhiteStar, YellowStar } from './Icons/StarIcon';

const Rating = ({ rating }) => {
  const [ratingStars, setRatingStars] = useState(rating);

  const createRatingStars = (ratingStars) => {
    const yellowStarsCount = Math.floor(ratingStars);
    const whiteStarsCount = 5 - yellowStarsCount;

    const starsArray = [
      ...Array(yellowStarsCount).fill(YellowStar),
      ...Array(whiteStarsCount).fill(WhiteStar),
    ];
    return starsArray;
  };

  const ratingStarsArray = createRatingStars(ratingStars);
  return (
    <>
      {ratingStarsArray.map((StarIcon, index) => (
        <button
          key={index}
          onClick={() => {
            if (ratingStars < 5) {
              setRatingStars((prev) => prev + 1);
            }
          }}
        >
          <StarIcon />
        </button>
      ))}
    </>
  );
};

export default Rating;
