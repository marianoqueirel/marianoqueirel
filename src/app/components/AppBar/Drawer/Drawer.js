import React, { useState, useCallback } from "react";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MaterialDrawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../../common/Logo";
import ListLinks from "../shared/ListLinks";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  drawerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "200px",
  },
  drawerContent: {
    width: "100%",
  },
});
const Drawer = () => {
  const [drawer, toggleDrawer] = useState(false);
  const openDrawer = useCallback(() => {
    toggleDrawer(true);
  }, []);
  const closeDrawer = useCallback(() => {
    toggleDrawer(false);
  }, []);
  const classes = useStyles();

  return (
    <Hidden mdUp>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={openDrawer}
      >
        <MenuIcon />
      </IconButton>
      <MaterialDrawer anchor="left" open={drawer} onClose={closeDrawer}>
        <div className={classes.drawerContainer}>
          <div className={classes.drawerContent}>
            <div style={{ flexDirection: "row" }}>
              <Logo vertical />
            </div>
            <Divider />
            <ListLinks />
          </div>
        </div>
      </MaterialDrawer>
    </Hidden>
  );
};

export default Drawer;
