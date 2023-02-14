import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const HomeBackground = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://southriftgalaxysafaris.com/wp-content/uploads/2019/02/carhire-1.jpg')",
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <Container>
        <Row className="d-flex align-items-center" style={{ height: '100vh' }}>
          <Col lg={6}>
            <Card style={{ width: '100%', backgroundColor: '#071c47' }}>
              <Card.Body style={{ color: 'white' }}>
                <Card.Title style={{fontSize: '2.25rem;'}}>Why Choose Us!</Card.Title>
                <Card.Text style={{ textAlign:'justify' }}>
                Safari Bookings strives to deliver exceptional service to all its clients. By adding a personal touch to our products, we ensure that your time spent with us is comfortable, enjoyable and memorable. From international standard hotels and resorts to more humble but comfortable self-catering apartments, Safari Bookings deals with the best East Africa has to offer. Our staff are always on call and will assist you upon arrival in any place, throughout your stay until departure.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeBackground;
