// ReviewButton.jsx
import React from "react";

const SubmitReview = () => {
  const handleReviewClick = () => {
    // Redirect to your Google Review link
    window.open("https://g.page/r/CSgL4zXreUtvEAI/review", "_blank");
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <button
        className="bg-orange-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleReviewClick}
      >
        Leave a Review
      </button>
    </div>
  );
};

export default SubmitReview;
