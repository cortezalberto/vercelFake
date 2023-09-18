import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
    return(
        <>
            <Carousel>
            <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  style={{maxHeight: "500px", objectFit: 'cover'}}
                  src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
                  alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  style={{maxHeight: "500px", objectFit: 'cover'}}
                  src="https://i.redd.it/znmuy49xo7f11.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  style={{maxHeight: "500px", objectFit: 'cover'}}
                  src="https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselHome;
