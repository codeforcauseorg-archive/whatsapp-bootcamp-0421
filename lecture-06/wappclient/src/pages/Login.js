import { Box, Button, TextField } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../actions/userActions";
import firebase from "../utils/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function Login() {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/signedIn",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
  };

  let dispatch = useDispatch();

  let history = useHistory();

  let user = useSelector((state) => state.user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(login(user));
      if (user) {
        if (!user.displayName) {
          var displayName = prompt("Please enter your name", "Unnamed");
          user
            .updateProfile({
              displayName,
            })
            .then(function (user) {
              console.log(firebase.auth().currentUser);
              dispatch(login(user));
              history.push("/");
            });
        } else {
          history.push("/");
        }
      }
    });
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      {user ? (
        <Button
          onClick={() => {
            firebase.auth().signOut();
          }}
        >
          Logout
        </Button>
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </Box>
  );
}

export default Login;
