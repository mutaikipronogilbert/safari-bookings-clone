import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'


function HomeSlide() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://www.kabiraugandasafaris.com/wp-content/uploads/2022/01/masai-mara-safari-kenya.jpg"
          alt="First slide"
          width="1500"
          height="400"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
           className="d-block w-100"
           src="https://www.kabiraugandasafaris.com/wp-content/uploads/2022/01/masai-mara-safari-kenya.jpg"
           alt="First slide"
           width="1500"
           height="400"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://www.kabiraugandasafaris.com/wp-content/uploads/2022/01/masai-mara-safari-kenya.jpg"
          alt="First slide"
          width="1500"
          height="400"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlide;