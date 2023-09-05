import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fantasy from '../data/fantasy.json'
import Book from './Book';
import { Component } from "react";

class AllTheBooks extends Component {
   render(){
    return (
        <Container>
            <Row className='row-cols-4 gy-3'>
                {fantasy.map((book, index) => (
                    <Col>
                        <Book src={book.img} price={book.price} key={index} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
   }

}

export default AllTheBooks;