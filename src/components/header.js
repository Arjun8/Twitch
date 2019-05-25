import React from "react";
import GoogleAuth from "./GoogleAuth";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
const Header = () => {
  return (
    <div>
      <AppBar >
        <Toolbar>
          <IconButton><MenuIcon/></IconButton>
          <Typography variant="h6">Twitch</Typography>
        <GoogleAuth /></Toolbar>
        </AppBar>
      </div>
  );
};
export default Header;
