import React from "react";
import {
  Menu
} from "semantic-ui-react";
import BookListContainer from './container/BookListContainer'

const API = `http://localhost:3000/books`
const defaultUser = {"id":1, "username":"pouros"}

function App() {

  
  return (
    <div>
      <Menu inverted>
        <Menu.Item header>Bookliker</Menu.Item>
      </Menu>
      <main>
      <BookListContainer API={API} defaultUser={defaultUser}/>
      </main>
    </div>
  );
}

export default App;
