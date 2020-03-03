import React from "react";

function Book(props) {
    return(
        <div className="bookCard">
            <h3>{props.book.title}</h3>
            <p>by {props.book.authors}</p>
            <p>description: {props.book.description}</p>
            <img src={props.book.imageURL}/>
            <a href={props.book.linkURL} target="_blank" >Visit this book</a>
        </div>
    )
}

export default Book;