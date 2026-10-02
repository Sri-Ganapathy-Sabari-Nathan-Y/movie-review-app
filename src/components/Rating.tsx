import { useState } from "react";

export const Rating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          className={`text-4xl transition ${
            star <= rating
              ? "text-[#F5C518]"
              : "text-[#52525B]"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
};
