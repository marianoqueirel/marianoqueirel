import React from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
    padding: "10px 0",
  },
});
const Logo = ({ vertical }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.container, {
        [classes.horizontal]: !vertical,
        [classes.vertical]: vertical,
      })}
    >
      <WhatshotIcon />
      <Typography variant="h6">Mariano Queirel</Typography>
    </div>
  );
};

export default Logo;
