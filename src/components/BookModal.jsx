import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function BookModal({
  title,
  description,
  publishedDate,
  printLength,
  rating,
  hide,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") hide();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [hide]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      hide();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-2xl max-w-xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <div className="modal-header flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            type="button"
            className="text-xl font-bold text-gray-500 hover:text-accent focus:outline-none focus:ring-2 focus:ring-black rounded"
            onClick={hide}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="modal-body mt-4 space-y-2 text-gray-700">
          <p className="text-base">{description}</p>
          <p className="text-sm">
            <span className="font-semibold">Published:</span> {publishedDate}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Length:</span> {printLength} pages
          </p>
          <p className="text-sm">
            <span className="font-semibold">Rating:</span> {rating} ⭐
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
