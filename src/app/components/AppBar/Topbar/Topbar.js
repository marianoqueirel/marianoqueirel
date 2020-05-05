import React from "react";
import Hidden from "@material-ui/core/Hidden";
import Logo from "../../common/Logo";
import ListLinks from "../shared/ListLinks";

const Topbar = () => {
  return (
    <Hidden smDown>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
        <ListLinks flexStyle />
      </div>
    </Hidden>
  );
};

export default Topbar;
