import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";
import "./Header.css";

const Header = () => {
  const fadeInAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div className="headerContainer">
      <animated.p style={fadeInAnimation}>Mariano Queirel</animated.p>
      <animated.p style={fadeInAnimation}>
        Software - Front End - Developer
      </animated.p>
    </div>
  );
};

export default Header;
