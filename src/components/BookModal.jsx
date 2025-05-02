import React from "react";

export default function BookModal({
  title,
  description,
  publishedDate,
  printLength,
  rating,
  hide,
}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
        <div className="modal-header flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            type="button"
            className="text-xl font-bold text-gray-600 hover:text-black"
            onClick={hide} aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="modal-body mt-4">
          <p>{description}</p>
          <p>Published Date: {publishedDate}</p>
          <p>Print Length: {printLength} pages</p>
          <p>Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
}
