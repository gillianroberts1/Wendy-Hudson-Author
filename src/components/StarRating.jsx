import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";

export function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const isCloserToFull = rating % 1 >= 0.75;
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      stars.push(<StarIcon key={i} className="w-5 h-5 text-yellow-500" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <svg
          key={i}
          className="w-5 h-5 text-yellow-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="halfGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGradient)"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      );
    } else if (i === fullStars && isCloserToFull) {
      stars.push(<StarIcon key={i} className="w-5 h-5 text-yellow-500" />);
    } else {
      stars.push(<StarOutlineIcon key={i} className="w-5 h-5 text-yellow-500" />);
    }
  }

  return <div className="flex space-x-0.5">{stars}</div>;
}
