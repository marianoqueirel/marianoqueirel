import React, { Fragment, useState } from "react";
import { useTransition, animated } from "react-spring";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import debounce from "lodash/debounce";
import nbaLogo from "../../../../assets/images/nba.png";
import "./nbaPlayers.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const playersData = [
  {
    nbaId: 0,
    name: "Michael Jordan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr0sCvP1CPMNgNu9ZXsTQL7CQEJIWGNPQn7KqoK007NSSbJrND&usqp=CAU",
    team: "",
  },
  {
    nbaId: 1,
    name: "Larry Bird",
    image: "https://www.biografiasyvidas.com/biografia/b/fotos/bird_larry.jpg",
    team: "",
  },
  {
    nbaId: 2,
    name: "LeBron James",
    image:
      "https://sc2.elpais.com.uy/files/article_default_content/uploads/2018/09/06/5b91677db30d5.jpeg",
    team: "",
  },
  {
    nbaId: 3,
    name: "Allen Iverson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXcGsG--fCYTsM0x8DTOWIn79cweOHMaXF2rgMlEBqQuMCCQL5&usqp=CAU",
    team: "",
  },
  {
    nbaId: 4,
    name: "Reggie Miller",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdXwa0ux031BYav5pv_FOwxPh1JJgSGfR-keUFHNnygaxb9-e_&usqp=CAU",
    team: "",
  },
  //{ nbaId: 5, name: "Penny Hardaway", image: "", team: "" },
  //{ nbaId: 6, name: "Patrick Ewing", image: "", team: "" },
  //{ nbaId: 7, name: "Scottie Pippen", image: "", team: "" },
  {
    nbaId: 8,
    name: "Kobe Bryant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsTuwrZLf33IKE_mQCvScob-gHqZ_GyUiGHWowJ9NCbdV3OfkN&usqp=CAU",
    team: "",
  },
  {
    nbaId: 9,
    name: "Shaquille O'neal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3p1Q5RQnHfx2KMh8LA-fe1IOOXZjYSsnl55SiZDLa6a4Q7YQZ&usqp=CAU",
    team: "",
  },
  {
    nbaId: 10,
    name: "Magic Johnson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPQNEsqy1xHYr-W79qkPsIuZj0JijEgm8x8b8UVluqMBlxUaw_&usqp=CAU",
    team: "",
  },
  {
    nbaId: 11,
    name: "Stephen Curry",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx989DDDDPckjNXPTfvfODwZlpElwJ3i1aT36NK2x36mxahF07&usqp=CAU",
    team: "",
  },
  {
    nbaId: 12,
    name: "Emanuel Ginóbili",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgzqJlvspi0CYzsyLG3Ylfel9VBHYrZORzcSDGseS1SEG8oxt8&usqp=CAU",
    team: "",
  },
  {
    nbaId: 13,
    name: "Tim Duncan",
    image:
      "https://www.gannett-cdn.com/-mm-/cccaacda38df0eea5050262c546beafa9d46a733/c=0-152-3031-1864/local/-/media/2016/07/11/USATODAY/USATODAY/636038294784773256-c02-refer-0512.jpg?width=3031&height=1712&fit=crop&format=pjpg&auto=webp",
    team: "",
  },
  {
    nbaId: 14,
    name: "John Stockton",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiiys6dnVjsTA1M_qnFgZhcr_CL19x0gd7xAtZ7H753I_3bekJ&usqp=CAU",
    team: "",
  },
  {
    nbaId: 15,
    name: "Karl Malone",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2hdho-j0tsIECBhwFe369XR4Vf2iJzjwN3sijCZUO946XQtjp&usqp=CAU",
    team: "",
  },
];

const useStyles = makeStyles((theme) => ({
  playersBoxContainer: {
    margin: "10px 0",
    overflowY: "auto",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const NbaPlayers = () => {
  const classes = useStyles();
  const [players, setBenchPlayers] = useState(playersData);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const animatedBenchPlayers = useTransition(
    players,
    (player) => player.nbaId,
    {
      config: { duration: 300 },
      from: {
        opacity: 0,

        display: "Flex",
        flexDirection: "column",
        alignItems: "center",
      },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  );

  const animatedSelectedPlayers = useTransition(
    selectedPlayers,
    (player) => player.nbaId,
    {
      config: { duration: 300 },
      from: {
        opacity: 0,
        transform: "translate(-100%)",
        display: "Flex",
        flexDirection: "column",
        alignItems: "center",
      },
      enter: { opacity: 1, transform: "translate(0)" },
      leave: { opacity: 0, transform: "translate(-100%)" },
    }
  );

  const movePlayer = (status, index) => {
    let nextBenchPlayers;
    let nextSelectedPlayers;
    if (status === "BENCH") {
      nextBenchPlayers = [
        ...players.slice(0, index),
        ...players.slice(index + 1, players.length),
      ];
      nextSelectedPlayers = [
        ...selectedPlayers.slice(0, selectedPlayers.length),
        players[index],
      ];
    } else {
      nextSelectedPlayers = [
        ...selectedPlayers.slice(0, index),
        ...selectedPlayers.slice(index + 1, selectedPlayers.length),
      ];
      nextBenchPlayers = [
        ...players.slice(0, players.length),
        selectedPlayers[index],
      ];
    }
    setBenchPlayers(nextBenchPlayers);
    setSelectedPlayers(nextSelectedPlayers);
  };

  const PlayerBox = ({ player, index, status }) => {
    const bench = status === "BENCH";
    const { name, image } = player;
    return (
      <Fragment>
        <Avatar alt={name} src={image || nbaLogo} className={classes.large} />
        <span>{name}</span>
        <Button
          color={bench ? "primary" : "secondary"}
          onClick={debounce(() => movePlayer(status, index), 170)}
        >
          {bench ? "ADD" : "REMOVE"}
        </Button>
      </Fragment>
    );
  };

  const renderPlayers = (status) => {
    const bench = status === "BENCH";
    const animatedPlayers = bench
      ? animatedBenchPlayers
      : animatedSelectedPlayers;

    return (
      <Fragment>
        {animatedPlayers.map(({ item, key, props }, index) => (
          <Grid item xs={4} sm={3} lg={2}>
            <animated.div key={key} style={props}>
              <PlayerBox
                player={item}
                index={index}
                status={bench ? "BENCH" : "SELECTED"}
              />
            </animated.div>
          </Grid>
        ))}
      </Fragment>
    );
  };

  return (
    <Grid container xs={12}>
      <Grid item xs={12} style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h4">Make the team of your dream</Typography>
      </Grid>
      <Grid container sm={12} md={6}>
        <Typography variant="h5" style={{ width: "100%" }}>
          My favorites players
        </Typography>
        <div style={{ width: "100%" }} className={classes.playersBoxContainer}>
          {renderPlayers("BENCH")}
        </div>
      </Grid>
      <Grid container sm={12} md={6}>
        <Typography variant="h5" style={{ width: "100%" }}>
          The Dream Team
        </Typography>
        <div style={{ width: "100%" }} className={classes.playersBoxContainer}>
          {renderPlayers("SELECTED")}
        </div>
      </Grid>
    </Grid>
  );
};

export default NbaPlayers;
