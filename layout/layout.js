import React from 'react';

import Navbar from '../components/Navbar';

import { Container, Row, Col } from 'react-bootstrap';

// const Layout = ({ children }) => {
//   return (
//     <div className="container-margin">
//       <Container fluid>
//         <Row>
//           <Col xs={12}>
//             {children}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

function Layout() {
  return (
    <div>
    <Navbar />
    
    </div>
  );
}


export default Layout;
