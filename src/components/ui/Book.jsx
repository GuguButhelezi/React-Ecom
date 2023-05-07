import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const Image = new Image();
    Image.src = book.url;
    Image.onload = () => {
      setTimeout(() => {
        if(mountedRef.current){
            setImg(Image);
        }
      }, 350);
    };
    return () => {
        // WHEN THE COMPONENT UNMOUNTS
        mountedRef.current = false
    }
  });

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src} alt="" className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="book__title--skeleton"></div>
          <div className="book__rating--skeleton"></div>
          <div className="book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;