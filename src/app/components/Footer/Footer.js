import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";

const Footer = () => {
  const fadeInAnimation = useSpring({
    opacity: 1,
    margin: "auto",
    from: { opacity: 0 },
  });
  return (
    <animated.p style={fadeInAnimation}>Footer made by Devanshu</animated.p>
  );
};

export default Footer;
