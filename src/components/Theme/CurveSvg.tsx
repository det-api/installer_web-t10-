import React from 'react'
import { motion } from 'framer-motion';

function CurveSvg() {
 const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;  

    const pathAnimation = {
        initial: {
            d: targetPath
        },
        enter: {
            d: initialPath,
            transition:{duration:1.2,ease:[0.76, 0, 0.24, 1]}
        }, 
        exit: {
            d: targetPath,
            transition:{duration:1.2,ease:[0.76, 0, 0.24, 1]}
        }
    };

// Rotate the path by a specified angle (e.g., -45 degrees)
const rotationAngle = -180;
const rotationCenterX = 100; // Adjust as needed
const rotationCenterY = window.innerHeight / 2; // Adjust as needed

  return (
      <svg className='svgCurve'>
          <motion.path transform={`rotate(${rotationAngle}, ${rotationCenterX}, ${rotationCenterY})`}  variants={pathAnimation} animate="enter" exit="exit" initial="initial" ></motion.path>
    </svg>
  )
}

export default CurveSvg