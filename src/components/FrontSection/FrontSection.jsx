import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import {Link as LinkS} from "react-scroll";

const carouselListI = [
  {
    id: 1,
    imageUrl: `${require("../../assets/images/1.jpg").default}`,
  },
  {
    id: 2,
    imageUrl: `${require("../../assets/images/2.jpg").default}`,
  },
  {
    id: 3,
    imageUrl: `${require("../../assets/images/3.jpg").default}`,
  },
  {
    id: 4,
    imageUrl: `${require("../../assets/images/4.jpg").default}`,
  },
  {
    id: 5,
    imageUrl: `${require("../../assets/images/5.jpg").default}`,
  },
  {
    id: 6,
    imageUrl: `${require("../../assets/images/6.jpg").default}`,
  },
  {
    id: 7,
    imageUrl: `${require("../../assets/images/7.jpg").default}`,
  },
];

function FrontSection() {
  const [[index, dir], setIndex] = useState([0, 0]);
  const [carouselList, setCarouselList] = useState([]);

  const transitions = useTransition(index, {
    keys: index,
    from: {
      opacity: 0,
      transform: `translateY(${dir === 1 ? 100 : -100}%) scale(0.5)`,
    },
    enter: {
      opacity: 1,
      transform: "translateY(0%) scale(1)",
    },
    leave: {
      opacity: 0,
      transform: `translateY(${dir === 1 ? -100 : 100}%) scale(0.5)`,
    },
    config: {
      duration: 800,
    },
  });

  const transitions1 = useTransition(index, {
    keys: index,
    from: {
      opacity: 0,
     
    },
    enter: {
      opacity: 1,
      
    },
    leave: {
      opacity: 0,
      
    },
    config: {
      duration: 500,
    },
  });
  // console.log(carouselList);


  const onClick = (path) => {
   // console.log(path)
   if (path === 1) {
    setIndex([(index + 1) % carouselList.length, 1])
   }

  else if (path === -1) {
   setIndex([(index - 1 + carouselList.length) % carouselList.length, -1]);
  }
  }
  useEffect(() => {
setCarouselList([...carouselListI])
  },[])



  useEffect(() => {
    if (carouselList.length > 1) {
      const t = setInterval(
        () => setIndex([(index + 1) % carouselList.length, 1]),
        7000
      );
      return () => clearTimeout(t);
    }
  }, [index ,carouselList]);

  return (
    <div className="font-container" id="home">
     <div className="image-container">

      {carouselList.length > 0 &&
        transitions1((style, i) => {
          return (
            <animated.div
            key={i}
              className="image-con"
              style={{
                ...style,
                backgroundImage: `url(${carouselList[i].imageUrl}`,
              }}
            />
          );
        })}
     </div>
     {
      carouselList.length >0 && 
      transitions((style , i) => {
       return (
        <animated.div 
        key={i}
        className="text-container"
        style={{...style}}
        >
           <h1>What You Want</h1>
           <h1>WE <strong>DESIGN</strong> FOR YOU!!</h1>
      <LinkS className="button-font"
    
       to="contact"
       smooth={true}
       duration={500}
       spy={true}
       exact="true"
       offset={-20}
       
      >Contact us <i className="fa fa-chevron-right"></i></LinkS>

        </animated.div>
       )
      })
     }

     <div className="left-button-container" onClick={() => onClick(-1)} >
     <span className="button-span"><i className="fa fa-arrow-circle-left"></i></span>
     <span class="border-animation-arow border-animation-arow--border-1"></span>
            <span class="border-animation-arow border-animation-arow--border-2"></span>
     </div>
     <div className="right-button-container" onClick={() => onClick(1)}>
     <span className="button-span"><i className="fa fa-arrow-circle-right"></i></span>
     <span class="border-animation-arow border-animation-arow--border-1"></span>
            <span class="border-animation-arow border-animation-arow--border-2"></span>
     </div>
 


    </div>
  );
}

export default FrontSection;
