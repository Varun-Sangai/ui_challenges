import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "./data";
//import imgGirl from "./assets/images/defaultImage.jpg";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="ae">
    <h2>
      FEATURES
    </h2>
    <div className="app">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <p>
                edebucbbcuwebybfcbe
                iebuchbebfucbeubceb
                ecjbehbfhbcugevfgve
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}

export default Carousel;