import React from "react";
import Button from "@material-ui/core/Button";
import AddAlert from '@material-ui/icons/AddAlert'
import { withStyles} from "@material-ui/styles";
import red from '@material-ui/core/colors/cyan'
import { Typography } from "@material-ui/core";
const styles = theme=>({
  button: {
    position:'relative',
marginLeft:theme,
backgroundColor:red[500], '&:hover': {
 backgroundColor: red[700],
} }
});
class GoogleAuth extends React.Component {
  state = { currentStatus: null };
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
          this.setState({ currentStatus: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.OnAuthChange);
        });
    });
  }
  OnAuthChange = () => {
    this.setState({ currentStatus: this.auth.isSignedIn.get() });
  };
  renderStatus() {
    if (this.state.currentStatus === null) {
      return null;
    } else if (this.state.currentStatus) {
      const UserName = this.auth.currentUser
        .get()
        .getBasicProfile()
        .getName();
      return (<div>        <Typography variant="h6">
          Welcome {UserName}</Typography>
          <Button
            className={this.props.classes.button} variant='contained'
            onClick={() => {
              this.auth.signOut();
            }}
          >
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
        ><AddAlert/>
          Sign In With Google
        </Button>
      );
    }
  }
  render() {
    return <div>{this.renderStatus()}</div>;
  }
}
export default withStyles(styles)(GoogleAuth);
