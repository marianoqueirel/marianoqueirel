import React from "react";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import routes from "../../../../routes/routes";

const useStyles = makeStyles({
  flex: {
    display: "flex",
  },
});

const ListLinks = (props) => {
  const { flexStyle } = props;
  const classes = useStyles();
  const ListItemLink = (props) => {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
      () =>
        React.forwardRef((itemProps, ref) => (
          <NavLink to={to} ref={ref} {...itemProps} />
        )),
      [to]
    );

    return (
      <li>
        <ListItem button component={renderLink}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  };
  return (
    <List className={clsx({ [classes.flex]: flexStyle })}>
      <ListItemLink to={routes.home.path} primary={routes.home.name} />
      <ListItemLink to={routes.resume.path} primary={routes.resume.name} />
      <ListItemLink
        to={routes.playground.path}
        primary={routes.playground.name}
      />
      <ListItemLink
        to={routes.siteDescription.path}
        primary={routes.siteDescription.name}
      />
      <ListItemLink to={routes.reddit.path} primary={routes.reddit.name} />
    </List>
  );
};

export default ListLinks;
