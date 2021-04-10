import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from '../actions/userActions'



function Home(){

    let user = useSelector(state => state.user);

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