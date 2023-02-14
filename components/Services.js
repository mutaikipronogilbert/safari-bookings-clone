import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Services() {
  return (
    <CardGroup className="d-flex justify-content-between">
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src="https://www.maasaimarakenyapark.com/wp-content/uploads/2019/06/7-days-Maasai-Mara-Safari-750x450.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the  content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin: '10px' }}>
      <Card.Img variant="top" src="https://www.maasaimarakenyapark.com/wp-content/uploads/2019/06/7-days-Maasai-Mara-Safari-750x450.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the s content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',margin: '10px' }}>
      <Card.Img variant="top" src="https://www.maasaimarakenyapark.com/wp-content/uploads/2019/06/7-days-Maasai-Mara-Safari-750x450.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </CardGroup>
  );
}

export default Services;