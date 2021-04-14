import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {login} from '../actions/userActions';
import firebase from '../utils/firebase';



function Home(){

    let user = useSelector(state => state.user);


    let history = useHistory();

    console.log(firebase.auth().currentUser.getIdToken());

    if(!user){
      history.push("/login");
    }

    return <Box display="flex" justifyContent="center" alignItems="center" style={{
        width: "100%",
        height: "1000px"
      }}>
        <Box
          display="flex"
          flexDirection="column"
          style={{
            width: "500px",
            padding : "20px",
            background : "#999999",
            borderRadius : "10px"
          }}
        >
          {user ? `Hello ${user.name}` : "Wait for data"}
         </Box>
      </Box>
    
}

export default Home;

