import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import CardGroup from 'react-bootstrap/CardGroup';
const TourDestinations = () => {
  return (
    <div className='container'>
    <CardGroup className="my-5">
      <Card style={{marginRight: '1rem'}}>
        <CardImg top src="https://www.southriftgalaxysafaris.com/wp-content/uploads/2019/12/cheetah-3600x2025-pair-hd-6057.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Masai Mara Valentine Deal</CardTitle>
          <CardSubtitle>3 Days / 2 Nights</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the  content.</CardText>
          <Button>View Safari</Button>
        </CardBody>
      </Card>
      <Card style={{marginRight: '1rem'}}>
        <CardImg top src="https://www.southriftgalaxysafaris.com/wp-content/uploads/2019/12/kenya-wildlife-lion-richard-denyer.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Touch of Kenya Safari</CardTitle>
          <CardSubtitle>6 Days / 5 Nights</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of thes content.</CardText>
          <Button>View Safari</Button>
        </CardBody>
      </Card>
      <Card style={{marginRight: '1rem'}}>
        <CardImg top src="https://www.southriftgalaxysafaris.com/wp-content/uploads/2019/12/cheetah-3600x2025-pair-hd-6057.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Highlights of Kenya Safari</CardTitle>
          <CardSubtitle>8 Days / 7 Nights</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the s content.</CardText>
          <Button>View Safari</Button>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
  );
};

export default TourDestinations;
