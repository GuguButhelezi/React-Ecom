
import React from "react";
import Book from "./ui/Book";
import { books } from '../data'

const Featured = () => {
    console.log(books)
    

    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <div className="section__title">
                        <h2>Featured <span className="green">Books</span></h2>
                    </div>
                    <div className="books">
                        {books
                            .filter(book => book.rating === 5).slice(0, 4)
                            .map(book => 
                            <Book book={book} key={book.id}/>)

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured