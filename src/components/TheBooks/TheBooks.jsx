import { Link, useLoaderData } from "react-router-dom";
import "./index.css";
import { mockRequest } from "../../utils/api";
import { useEffect, useRef, useState } from "react";
import BaseLoader from "../BaseLoader/BaseLoader";

function filteredArr(arr) {
  const sets = [...new Set(arr.map((item) => item.title))];
  const filteredArr = sets.map((title) =>
    arr.find((item) => item.title === title)
  );

  return filteredArr;
}

function TheBooks() {
  const [books, setBooks] = useState();
  const queryRef = useRef();

  async function getBooks(query = "js") {
    if (query.trim().length < 1) return;
    mockRequest(fetch(`https://www.dbooks.org/api/search/${query}`))
      .then((answ) => answ.json())
      .then((data) => {
        setBooks(filteredArr(data.books));
      });
  }

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div>
      <h2 className="books-title">Books list</h2>
      <input
        ref={queryRef}
        className="books-search"
        type="text"
        placeholder="Example: Java"
      />
      <button onClick={() => getBooks(queryRef.current.value)}>Find</button>
      {books ? (
        <ul className="books-list">
          {books?.map((book) => (
            <li className="book-wrap" key={book.id}>
              <img className="book-img" src={book.image} alt="book" />
              <Link to={`/books/${book.id}`} className="book-title">
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <BaseLoader />
      )}
    </div>
  );
}

export default TheBooks;
