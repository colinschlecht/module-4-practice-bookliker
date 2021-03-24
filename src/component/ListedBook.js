import React from "react";
import {
  Container,
  Header,
  Button,
  List,
  Image
} from "semantic-ui-react";


const ListedBook = (props) => {

if(props.book.title) {
return(
 <Container text>
 <Header>{props.book.title}</Header>
 <Image
   src={`${props.book.img_url}`}
   size="small"
 />
 <p>{props.book.description}</p>
 <Button
   color="red"
   content="Like"
   icon="heart"
   book={props.book}
   user={props.user}
   onClick={() => props.likeBook(props.book, props.user)}
   label={{
     basic: true,
     color: "red",
     pointing: "left",
     content: "2,048"
   }}
 />

 <Header>Liked by</Header>
 <List>
     {props.book.users.map( user => <List.Item key={user.id} icon="user" content={user.username }/> )}
 </List>
</Container>

)
} else {
    return (
        <h1>No Book Selected</h1>
    )
}
}

export default ListedBook