import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { mockRequest } from "../../utils/api";
import BaseLoader from "../BaseLoader/BaseLoader";
import "./index.css";

export async function bookLoader({ params: { id } }) {
  try {
    const req = await mockRequest(
      fetch(`https://www.dbooks.org/api/book/${id}`)
    );
    const books = await req.json();
    return books;
  } catch (error) {
    console.error(`error - ${error.name}: ${error.message}`);
  }
}

function BookCard() {
  const book = useLoaderData();

  return (
    <>
      {book ? (
        <div className="book-section">
          <h3 className="book-title">{book.title}</h3>
          <h4 className="book-subtitle">{book.subtitle}</h4>
          <img className="book-img" src={book.image} alt="book" />
          <p className="book-desc">{book.description}</p>
          <h4 className="book-author">Author: {book.authors}</h4>
          <h5 className="book-publ">publisher: {book.publisher}</h5>
        </div>
      ) : (
        <BaseLoader />
      )}
    </>
  );
}

export default BookCard;
