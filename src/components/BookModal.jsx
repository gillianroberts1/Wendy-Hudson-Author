import React from "react";
import { motion } from "framer-motion";

export default function BookModal({
  title,
  description,
  publishedDate,
  printLength,
  rating,
  hide,
}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-8 rounded-2xl max-w-xl w-full shadow-2xl"
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
            <span className="font-semibold">Rating:</span> {rating}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
