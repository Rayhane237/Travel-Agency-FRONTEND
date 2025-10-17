import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Images
import Dubai from "../../../assets/Dubai.jpg";
import albania from "../../../assets/albania.jpg";
import Turkey from "../../../assets/Turkey.jpg";
import paris from "../../../assets/paris.jpg";
import Moscow from "../../../assets/Moscow.jpg";
import italy from "../../../assets/italy.jpg";
import Brazil from "../../../assets/Brazil.jpg";
import Taj from "../../../assets/Taj.jpg";
import Egypt from "../../../assets/Egypt.jpg";
import old from "../../../assets/old.jpg";
import { div } from 'framer-motion/client';

const TopDestinations = () => {
  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({ target: targetRef });
  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <div className="scroll-wrapper" >
      <br />
      <h4 style={{ color: "rgba(21, 63, 72, 1)" }}>Top destinations</h4>
      <h1 style={{ color: "black" }}>Discover your love</h1>

      <motion.div className="group" >
        {[Dubai, Turkey, albania, paris, Moscow, Brazil, italy, Taj, Egypt, old].map((img, index) => {
          const names = ["Dubai", "Turkey", "Albania", "Paris", "Moscow", "Brazil", "Italy", "Taj Mahal", "Egypt", "Singapore"];
          return (
      
            <div aria-hidden className="destination" key={index}>
              <img src={img} alt={names[index]} />
              <h5 style={{ color: "black" }}>{names[index]}</h5>

            </div>
          
   
          );
        })}
      </motion.div>
    </div>
  );
};

export default TopDestinations;
