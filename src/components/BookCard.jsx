import React from "react";

const BookCard = ({ image, title, subtitle, amazonLink, goodreadsLink }) => {
  return (
    <div className="text-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col overflow-hidden">
      <div className="relative w-full h-72 aspect-auto overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
        />
      </div>

      <div className="flex flex-col flex-grow items-center m-3 lg:m-4">
        <h4 className="mt-3 text-foreground">{title}</h4>
        <p className="flex text-center text-sm text-foreground mb-auto">{subtitle}</p>
        <div className="flex justify-center space-x-2 mt-3">
          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent"
          >
            Amazon
          </a>
          <span className="text-accent">|</span>
          <a
            href={goodreadsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent"
          >
            Goodreads
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
