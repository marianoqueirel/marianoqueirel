import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <CardHeader
        avatar={null}
        action={null}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <CardMedia
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>

          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
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
          <div style={{ width: "250px", height: "100%" }}>
            {renderRedditList()}
          </div>
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown>
        <Grid
          md={4}
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
