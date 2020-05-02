import React, { Fragment, useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import debounce from "lodash/debounce";

const playersData = [
  { nbaId: 0, name: "Michael Jordan", image: "", team: "" },
  { nbaId: 1, name: "Larry Bird", image: "", team: "" },
  { nbaId: 2, name: "LeBron James", image: "", team: "" },
  { nbaId: 3, name: "Allen Iverson", image: "", team: "" },
  { nbaId: 4, name: "Reggie Miller", image: "", team: "" },
  { nbaId: 5, name: "Penny Hardaway", image: "", team: "" },
  { nbaId: 6, name: "Patrick Ewing", image: "", team: "" },
  { nbaId: 7, name: "Scottie Pippen", image: "", team: "" },
  { nbaId: 8, name: "Kobe Bryant", image: "", team: "" },
  { nbaId: 9, name: "Shaquille O'neal", image: "", team: "" },
  { nbaId: 10, name: "Magic Johnson", image: "", team: "" },
  { nbaId: 11, name: "Stephen Curry", image: "", team: "" },
  { nbaId: 12, name: "Emanuel Ginóbili", image: "", team: "" },
  { nbaId: 13, name: "Tim Duncan", image: "", team: "" },
  { nbaId: 14, name: "John Stockton", image: "", team: "" },
  { nbaId: 15, name: "Karl Malone", image: "", team: "" },
];

const NbaPlayers = () => {
  const [players, setBenchPlayers] = useState(playersData);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const animatedPlayers = useTransition(players, (player) => player.nbaId, {
    config: { duration: 150 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const animatedSelectedPlayers = useTransition(
    selectedPlayers,
    (player) => player.nbaId,
    {
      config: { duration: 150 },
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  );

  const movePlayers = (operation, index) => {
    let nextBenchPlayers;
    let nextSelectedPlayers;
    if (operation === "ADD") {
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

  const renderBenchedPlayers = () => (
    <Fragment>
      {animatedPlayers.map(({ item, key, props }, index) => (
        <animated.div key={key} style={props}>
          <span>{item.name}</span>
          <button onClick={debounce(() => movePlayers("ADD", index), 170)}>
            Add
          </button>
        </animated.div>
      ))}
    </Fragment>
  );

  const renderSelectedPlayers = () => (
    <Fragment>
      {animatedSelectedPlayers.map(({ item, key, props }, index) => (
        <animated.div key={key} style={props}>
          <button onClick={debounce(() => movePlayers("REMOVE", index))}>
            Remove
          </button>
          <span>{item.name}</span>
        </animated.div>
      ))}
    </Fragment>
  );

  return (
    <Fragment>
      <div style={{ width: "50%", display: "flex" }}>
        <div style={{ width: "50%" }}>{renderBenchedPlayers()}</div>
        <div style={{ width: "50%" }}>{renderSelectedPlayers()}</div>
      </div>
    </Fragment>
  );
};

export default NbaPlayers;
