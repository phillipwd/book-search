import axios from "axios";

const URLBase="https://www.googleapis.com/books/v1/volumes?q=";

const API = {
    getBooks: function(searchTerm){
        return axios.get(URLBase + searchTerm);
    },
    getBook: function(id){
        return axios.get("/api/books/" + id);
    },
    deletBook: function(id){
        return axios.delete("api/books/" + id);
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData)
    }
};

export default API;