import React from "react";
import SectionWrapper from "./SectionWrapper";
import BookCard from "./BookCard";
import booksData from "../data/booksData";

const BooksSection = () => {
  console.log(booksData);
  return (
    <SectionWrapper noTopPadding>
      <div className="w-full mx-auto flex flex-col items-center text-center">
        <div className="">
          <h2>Books</h2>
          <p className="text-base lg:mb-20">Browse Wendy’s published works and find your next favorite read.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-x-12 lg:gap-y-16">
        
        {booksData.map((book) => (
          <BookCard
            key={book.id}
            image={book.coverImage}
            title={book.title}
            subtitle={book.subtitle}
            amazonLink={book.amazonLink}
            goodreadsLink={book.goodreadsLink}
          />
        ))}
        
      </div>
    </SectionWrapper>
  );
};

export default BooksSection;
