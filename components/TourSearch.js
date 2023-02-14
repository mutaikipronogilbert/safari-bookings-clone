import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TourSearch = () => {
  return (
    <div
      className='d-flex align-items-center bg-image'
      style={{
        backgroundImage: "url(https://southriftgalaxysafaris.com/wp-content/uploads/2019/02/covenrh-3.jpg)",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1 className='display-4 text-white'>Find Your Perfect Safari</h1>
            <Form className='mt-5'>
              <FormGroup className='d-flex justify-content-between'>
                <Input
                  type='select'
                  name='destination'
                  id='destination'
                  style={{ width: "30%", marginRight: "10px" }}
                >
                  <option value=''>Destination</option>
                  <option value='Europe'>Europe</option>
                  <option value='Asia'>Asia</option>
                  <option value='Africa'>Africa</option>
                  <option value='North America'>North America</option>
                  <option value='South America'>South America</option>
                </Input>
                <Input
                  type='select'
                  name='month'
                  id='month'
                  style={{ width: "30%" }}
                >
                  <option value=''>Month</option>
                  <option value='January'>January</option>
                  <option value='February'>February</option>
                  <option value='March'>March</option>
                  <option value='April'>April</option>
                  <option value='May'>May</option>
                  <option value='June'>June</option>
                  <option value='July'>July</option>
                  <option value='August'>August</option>
                  <option value='September'>September</option>
                  <option value='October'>October</option>
                  <option value='November'>November</option>
                  <option value='December'>December</option>
                </Input>

                <Input
                  type='select'
                  name='sortby'
                  id='sortby'
                  style={{ width: "30%" }}
                >
                  <option value=''>Sort by</option>
                  <option value='Price Low'>Price Low to High</option>
                  <option value='Price High'>Price High to Low</option>
                  <option value='Date'>Sort by Date</option>
                  <option value='Name'>Sort by Name</option>
                  <option value='Popularity'>Sort by Popularity</option>
                  <option value='Reviews'>Sort by Review Count</option>
                  
                </Input>
              </FormGroup>
              <Button
                color='danger'
                className='mt-3'
                style={{
                  width: "100%",
                  fontSize: "1.25rem",
                  padding: "10px 20px",
                }}
              >
                Search For a Safari
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSearch;
