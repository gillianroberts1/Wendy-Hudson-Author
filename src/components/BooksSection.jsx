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
          <p className="text-base m-3 lg:mb-20">Browse Wendy’s published works and find your next favourite read.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-x-12 lg:gap-y-16">
        
        {booksData.map((book) => (
          <BookCard
            key={book.id}
            image={book.coverImage}
            title={book.title}
            subtitle={book.subtitle}
            description={book.description}
            publishedDate={book.publishedDate}
            printLength={book.printLength}
            rating={book.rating}
            reviewSnippet={book.reviewSnippet}
            amazonLink={book.amazonLink}
            goodreadsLink={book.goodreadsLink}
          />
        ))}
        
      </div>
    </SectionWrapper>
  );
};

export default BooksSection;
