import React, {useState} from "react";
import "./style.css";
import Book from "../Book"
import API from "../../utils/API"

function Search (){

    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [booksID, setBooksID] = useState({})

    const handleInputChange = event => {
        setSearchTerm(event.target.value)
    }

    const handleClick = event => {
        console.log(searchTerm);
        API.getBooks(searchTerm)
        .then(res =>{
            console.log(res);
            const bookChoices=res.data.items.map(item => {
                const bookChoice={
                    title:item.volumeInfo.title,
                    authors:item.volumeInfo.authors,
                    description:item.volumeInfo.description,
                    imageURL:item.volumeInfo.imageLinks.thumbnail,
                    linkURL:item.volumeInfo.previewLink
                }
                return bookChoice;
            })
            setBooks(bookChoices)
        })
    }

    return(
        <div>
            <input placeholder="search for a book" name ="bookSearch" onChange={handleInputChange}/>
            <input type="submit" onClick={handleClick} value ="Find it!" name="submitButton" />

            <div className="bookSearchCard">
                {books.map(book=>  <Book key={book.id} book={book} />)}
            </div>
        </div>
    )
}

export default Search;