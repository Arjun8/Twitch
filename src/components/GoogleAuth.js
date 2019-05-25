import React from "react";
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions'
import Button from "@material-ui/core/Button";
import { withStyles} from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faLockOpen} from '@fortawesome/free-solid-svg-icons';
const styles = theme=>({
  button: {
    position:'absolute',
    right:'0',
    marginRight:'10px',
    top:'0',
    marginTop:'10px',
    backgroundColor:'#ef5350',
    '&:hover':{backgroundColor:"#d50000"}
},
user:{
  padding:'20px'
},googleIcon:{
  padding:"2px"
} }
);
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "509105587202-hqq4rktt5vpn8e95pj11dmtn633coeqm.apps.googleusercontent.com",
          scope: "email",
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"
          ]
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          /*this.setState({
            UserName: this.auth.currentUser
              .get()
              .getBasicProfile()
              .getName()
          });*/
          this.OnAuthChange( this.auth.isSignedIn.get() );
          this.auth.isSignedIn.listen(this.OnAuthChange);
        });
    });
  }
  OnAuthChange = (isSignedIn) => {
    if(isSignedIn)
    {
this.props.signIn();
    }
    else
    {
this.props.signOut();
    }
  };
  renderStatus() {
    if (this.props.currentStatus === null) {
      return null;
    } else if (this.props.currentStatus) {
   /*   const UserName = this.auth.currentUser
        .get()
        .getBasicProfile()
        .getName();*/
      return (<div>      <Typography variant="h6" className={this.props.classes.user}><FontAwesomeIcon icon={faUser}/>
          Welcome</Typography>
          <Button
            className={this.props.classes.button} variant='contained' color='secondary'
            onClick={() => {
              this.auth.signOut();
            }}
          ><FontAwesomeIcon icon={faLockOpen}/>
            Logout
          </Button></div>
       );
    } else {
      return (
        <Button mr="100px"
          variant="contained"
          className={this.props.classes.button}
          onClick={() => {
            this.auth.signIn();
          }}
        ><FontAwesomeIcon icon={faGoogle} size="lg" className="googleIcon"/>
          Sign In With Google
        </Button>
      );
    }
  }
  render() {
    return <div>{this.renderStatus()}</div>;
  }
}
const mapStateToProps=(state)=>
{
return {currentStatus : state.auth.isSignedIn};
}
export default connect(mapStateToProps,{signIn,signOut})(withStyles(styles)(GoogleAuth));
