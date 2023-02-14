import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

function MainNavigation() {
return (
<Navbar bg="light" expand="lg">
<Container fluid>
<Image src="https://routewildsafaris.com/assets/images/partners/safari-bookings.png" height="50" width='auto' style={{ marginRight: '10px' }} alt='Safari Bookings'/>

<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav className="d-flex justify-content-center me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/aboutus">About Us</Nav.Link>
<Nav.Link href="/destinations">Destinations</Nav.Link>
<Nav.Link href="/topdeals">Top Deals</Nav.Link>
<Nav.Link href="/blog">Blog</Nav.Link>
<Nav.Link href="/contactus">Contact Us</Nav.Link>
</Nav>
<Form className="d-flex">
<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
<Button variant="outline-success">Search</Button>
</Form>
</Navbar.Collapse>
</Container>
</Navbar>
);
}

export default MainNavigation;