import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import DeleteIcon from "@material-ui/icons/Delete";
import MessageIcon from "@material-ui/icons/Message";
const PostCard = ({ post }) => {
  return (
    <Card style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <Avatar
            style={{
              backgroundColor: "red",
              width: "1rem",
              height: "1rem",
              marginRight: "1rem",
            }}
          >
            {" "}
          </Avatar>
          <Typography
            noWrap
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Manu Ginolibi
          </Typography>
        </div>
        <div>
          <Typography
            noWrap
            variant="body2"
            color="textSecondary"
            component="p"
          >
            9 hours ago
          </Typography>
        </div>
      </div>
      <Grid container>
        <img
          alt="text "
          style={{ width: "100%", height: "100%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1XpsQ65vbbKb4wSxXM-x3hpVaD4AREqrrJcRkc9Cj3I3Y_8gw&usqp=CAU"
        />
        <Typography noWrap variant="h6" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </Grid>
      <CardActions disableSpacing style={{ justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Badge
          color="secondary"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          badgeContent={99}
        >
          <MessageIcon />
        </Badge>
      </CardActions>
    </Card>
  );
};

const Reddit = () => {
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };

  const renderRedditList = () => (
    <Fragment>
      <div style={{ height: "5%", textAlign: "center" }}>Header</div>
      <div style={{ height: "90%", backgroundColor: "red", overflowY: "auto" }}>
        {["", "", "", ""].map((post) => {
          return (
            <Grid xs={12}>
              <PostCard post={post} />
            </Grid>
          );
        })}
      </div>
      <div style={{ height: "5%", textAlign: "center" }}>Footer</div>
    </Fragment>
  );

  return (
    <Grid container style={{ height: "100vh" }}>
      <Hidden mdUp>
        <SwipeableDrawer
          open={drawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div style={{ width: "300px", height: "100%" }}>
            {renderRedditList()}
          </div>
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown>
        <Grid
          md={4}
          lg={3}
          style={{
            backgroundColor: "green",
            height: "100%",
          }}
        >
          {renderRedditList()}
        </Grid>
      </Hidden>
      <Grid
        container
        sm={12}
        md={8}
        lg={9}
        style={{ backgroundColor: "red", justifyContent: "center" }}
      >
        <Hidden mdUp>
          <Grid
            container
            xs={1}
            alignItems="start"
            justify="center"
            style={{ marginTop: "1rem" }}
          >
            <MenuIcon fontSize="large" onClick={() => setDrawer(true)} />
          </Grid>
        </Hidden>
        <Grid container xs={11} md={12}>
          <Typography variant="h2">Post Content</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Reddit;
