import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = () =>{

    return (
        <>
            <h1>Listado de items</h1>

            <Card style={{ width: '18rem' }}>
         
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
         
         <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
         </Card.Body>
         </Card>

         <Card style={{ width: '18rem' }}>
         
         <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
             </Card.Text>
             <Button variant="primary">Go somewhere</Button>
         </Card.Body>
         </Card>
        </>  
    )
}

export default ItemListContainer