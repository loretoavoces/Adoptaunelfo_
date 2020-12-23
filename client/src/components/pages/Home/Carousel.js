import { Carousel } from "react-bootstrap";

const MainCarousel = () => {
  return (
    <Carousel indicators={false} controls={false} interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/loretoavoces/image/upload/v1608739157/fotos-navidad/Carousel1_lytbpg.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/loretoavoces/image/upload/v1608739276/fotos-navidad/Carousel2_iidurq.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/loretoavoces/image/upload/v1608739277/fotos-navidad/Carousel3_y2jp2m.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
