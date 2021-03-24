import React, { Component } from 'react'
import BookList from '../component/BookList'
import ListedBook from '../component/ListedBook'

class BookListContainer extends Component{


    state = {
        defaultUser: this.props.defaultUser,
        bookArray: [],
        theChosenOne: {}
    }

    componentDidMount(){
        fetch(this.props.API)
            .then(resp => resp.json())
            .then(data => {
                this.setState({bookArray: data})
            })
    }

    selectBook = (book) => {
        this.setState({theChosenOne: book})
    }

    updateLikes = (book, user) => {
        console.log(book, user)
        fetch(`${this.props.API}/${book.id}`, {
           method: 'PATCH',
           headers: {
               'Content-Type': 'Application/json',
               'Accept': 'Application/json'
           },
           body: JSON.stringify({
               users: [...book.users, user]
           }) 
        })
        .then(res => res.json())
        .then(book => {
            this.setState({
                theChosenOne: book
            })
        })
    }

    removeLike = (book, user) => {
        let index = book.users.indexOf(user)
        if(index > -1){
            book.users.splice(index,1)
        }
        console.log(book.users)
        fetch(`${this.props.API}/${book.id}`, {
            method: 'PATCH',
            headers: {
                    'Content-Type': 'Application/json',
                     'Accept': 'Application/json'
                    },
            body: JSON.stringify({
                users: [...book.users]
            })
        })
        .then(res => res.json())
        .then(book => {
            this.setState({
                theChosenOne: book
            })
        })
        
    }
//if the book has been liked by a user with the same 
    //user.id as user, remove that like. If not, like the book.
    
    likeBook = (book, user) => {
        for(let u of book.users){
            if(u.id === user.id){
                this.removeLike(book, u)
                return null
            }
        }
        this.updateLikes(book, user)
    } 

    render(){
        return(
            <>
            <BookList bookArray={this.state.bookArray} selectBook={this.selectBook}/>
            <ListedBook bookArray={this.state.bookArray} user={this.state.defaultUser} book={this.state.theChosenOne} likeBook={this.likeBook}/>
            </>
        )
    }

}

export default BookListContainer

//componentDidMount() {
    // Simple DELETE request with fetch
   // fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
     //   .then(() => this.setState({ status: 'Delete successful' }));
//}

//fetch("https://jsonplaceholder.typicode.com/posts/1", {  
    // method: "PATCH",
    //  headers: {    
        // "Content-type": "application/json"  
        //},  
        //body: JSON.stringify({    
        //title: "Corrected post"  
    //})}) 
   // .then(response => response.json())
    //.then(data => console.log(data));
//