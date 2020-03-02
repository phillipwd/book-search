import React from "react";
import "./style.css";

function Search (){

    function handleClick(){
        const search=document.getElementsByName("bookSearch")
        console.log(search[0].value);
        
    }

    return(
        <div>
            <input placeholder="search for a book" name ="bookSearch"/>
            <input type="submit" onClick={handleClick} value ="Find it!" name="submitButton" />
        </div>
    )
}

export default Search;