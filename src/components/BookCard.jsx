import React from "react";

const BookCard = ({ image, title, subtitle, amazonLink, goodreadsLink }) => {
  return (
    <div className="text-foreground rounded-lg shadow-lg flex flex-col">
      <div className="relative w-full h-72  aspect-auto overflow-hidden rounded-lg">
        
        {/* 150% maintains aspect ratio */}
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
        />
      </div>

      <div className="flex flex-col flex-grow items-center m-2">
        <h4 className="mt-3 text-foreground">{title}</h4>
        <p className=" flex text-center text-sm text-foreground mb-auto">{subtitle}</p>
        <div className=" flex justify-center space-x-2 mt-3">
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
