import React from "react";
import {
  Menu
} from "semantic-ui-react";

const BookList = (props) => {


return (
<Menu vertical inverted>
    {props.bookArray.map(book=> <Menu.Item as={"a"} key={book.id} onClick={()=>props.selectBook(book)} title={book.title}>{book.title}</Menu.Item> )}
 </Menu>
)
}
export default BookList
