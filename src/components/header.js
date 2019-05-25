import React from "react";
import GoogleAuth from "./GoogleAuth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/styles';
const styles={
toolBar:{
backgroundColor:'#5e35b1'
}
}
const Header = (props) => {
  return (
    <div>
      <AppBar >
        <Toolbar className={props.classes.toolBar}>
          <IconButton><MenuIcon/></IconButton>
          <Typography variant="h6">Twitch</Typography>
        <GoogleAuth /></Toolbar>
        </AppBar>
      </div>
  );
};
export default withStyles(styles)(Header);
