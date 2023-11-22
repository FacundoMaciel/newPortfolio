import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "./Projects";


function NextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "rgb(17 24 39)", borderRadius:"55px"}}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "rgb(17 24 39)", borderRadius:"55px"}}
        onClick={onClick}
      />
    );
  }

  const ProjectsCarousel = (): JSX.Element => {
    const settings = {
      dots: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      autoplay: true,
      initialSlide: 2,
      autoplaySpeed: 3000,
      responsive: [
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    }

    return (
        <section>
            <div>
      <div className="flex items-center justify-center md:flex sm:flex lg:flex">
        <div className="w-full">
          <Slider {...settings}>
            <Projects />
          </Slider>
        </div>
      </div>
    </div>
        </section>
    )
  };

  export default ProjectsCarousel;