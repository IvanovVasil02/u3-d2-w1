import { Component } from "react";
import Card from 'react-bootstrap/Card';


class Book extends Component{

    render(){
        return( 
                <Card>
                    <Card.Img variant="top" src={this.props.src} />
                    <Card.Body>
                        <Card.Title>Price: {this.props.price}$</Card.Title>
                    </Card.Body>
                </Card>
      )
    }
}

export default Book;