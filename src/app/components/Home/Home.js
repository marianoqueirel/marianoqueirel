import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import Box from "@material-ui/core/Box";

const Home = () => (
  <Container maxWidth="md" style={{ textAlign: "center", paddingTop: "1rem" }}>
    <Typography variant="h2">Welcome</Typography>
    <Typography variant="h3">Mariano Queirel</Typography>
    <Typography variant="h5">Software Front End Developer</Typography>
    <Box style={{ margin: "1.5rem 0" }}>
      <Typography variant="h5">
        <GitHubIcon /> github.com/marianoqueirel
      </Typography>
      <Typography variant="h5">
        <LinkedInIcon /> linkedin.com/in/marianoqueirel
      </Typography>
      <Typography variant="h5">
        <EmailIcon /> marianoqueirel@gmail.com
      </Typography>
    </Box>

    {/* <Button
      variant="contained"
      color="primary"
      style={{ height: "5rem", width: "5rem", borderRadius: "50%" }}
    >
      Resume
    </Button>
    <Button
      variant="contained"
      color="primary"
      style={{ height: "5rem", width: "5rem", borderRadius: "50%" }}
    >
      Playground
    </Button>
    <Button
      variant="contained"
      color="primary"
      style={{ height: "5rem", width: "5rem",  borderRadius: "50%" }}
    >
      Site Description
    </Button> */}
  </Container>
);

export default Home;
