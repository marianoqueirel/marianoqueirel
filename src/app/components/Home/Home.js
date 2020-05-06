import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Home = () => (
  <Container maxWidth="md" style={{ textAlign: "center" }}>
    <Typography variant="h2">Welcome</Typography>
    <Typography variant="h5">Software Front End Developer</Typography>
    <Typography variant="body1" gutterBottom>
      I love our amazing industry. I’ve been working in small and big projects
      which gave me the opportunity to work with different types of
      responsibilities. I'm a faster learner. I like and enjoy studying and
      learning new technologies and work processes. I have got USA VISA B1/B2. I
      am available to travel. I've been in Austin, TX three times in the last 6
      months visiting a client. I'm focused on Javascript and front end world,
      I've worked with React, React Native, Angular2+, AngularJS. Also, I had
      the opportunity to write some code on the back end side using Node JS and
      Mongo DB. Nowadays, I am oriented to work with React JS for web and with
      React Native to develop mobile applications. I use Redux solutions
      applying middlewares like Redux-Saga to manage side-effects. I've been
      working improving the performance of a big project. We measure and get
      profiles to detect unnecessary re-renders and processing. We apply
      texhniques such as memorization and virtualization. I like using libraries
      like styled-components, react-spring, material-ui, etc. With Angular2+
      I’ve designed severals architectures using many of its features such as
      client and server-side rendering, routing, lazy load modules, providers,
      injector system, features modules, etc. I enjoy listening to music,
      playing electric bass, meditating, reading, traveling around the world,
      spending time with my girlfriend, family and friends. I'm interested in
      save our plannet and create a better place to live in. I like the phrase:
      " We can't change the whole world but we can start to do"
    </Typography>
    <Button variant="contained" color="primary">
      Resume
    </Button>
    <Button variant="contained" color="primary">
      Playground
    </Button>
    <Button variant="contained" color="primary">
      Site Description
    </Button>
  </Container>
);

export default Home;
