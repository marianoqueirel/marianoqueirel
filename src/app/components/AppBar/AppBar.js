import React from "react";
import MaterialAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "./Drawer";
import Topbar from "./Topbar";

const AppBar = () => {
  return (
    <MaterialAppBar position="static">
      <Toolbar>
        <Topbar />
        <Drawer />
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
