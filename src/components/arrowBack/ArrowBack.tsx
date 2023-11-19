import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import arrow from "../../assets/icons/arrowBack.png"


const ArrowBack = () => {

    const [arrowBack, setArrowBack] = useState(false);
  
    const showArrowBack = () => {
      if (window.scrollY >= 320) {
        setArrowBack(true);
      } else setArrowBack(false);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", showArrowBack);
    }, []);


  return (
    <>
      {arrowBack ? (
        <div className="right-0 bottom-0 fixed animate-fade-up animate-duration-300">
          <Link to="Home" smooth duration={900} >
            <figure className="w-12 cursor-pointer">
              <img src={arrow} alt="logo" />
            </figure>
          </Link>
        </div>
      ) : (
        null
      )
      }
    </>
  )
}

export default ArrowBack