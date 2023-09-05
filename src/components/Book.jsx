import { Component } from "react";
import Card from 'react-bootstrap/Card';


class Book extends Component{

    render(){
        return( 
                <Card className="h-100" >
                    <Card.Img variant="top" src={this.props.src} className="h-100 object-fit-cover" />
                    <Card.Body className="d-flex">
                        <Card.Title className="mt-auto"> {this.props.title}$</Card.Title>
                    </Card.Body>
                </Card>
      )
    }
}

export default Book;