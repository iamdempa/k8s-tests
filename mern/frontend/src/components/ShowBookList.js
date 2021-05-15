import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    console.log(`console ======== ${process.env.REACT_APP_BACKEND_URL} and port ======== ${process.env.REACT_APP_BACKEND_PORT}`)
    axios
      .get(`http://backend.demo-enterprise.tk:8080/api/books`)
      .then(res => {
        this.setState({
          books: res.data
        })
      })
      .catch(err =>{
        console.log(`console ======== ${process.env.REACT_APP_BACKEND_URL} and port ======== ${process.env.REACT_APP_BACKEND_PORT}`)
        console.log(`${err} ----- Backend URL IS: ${process.env.REACT_APP_BACKEND_URL} && Backend Port is: ${process.env.REACT_APP_BACKEND_PORT}`);
      })
  };


  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if(!books) {
      bookList = "there is no book recored!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              {console.log(process.env.REACT_APP_BACKEND_URL)}
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {bookList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;
