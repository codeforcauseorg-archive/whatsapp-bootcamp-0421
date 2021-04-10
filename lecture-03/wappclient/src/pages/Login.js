import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {login} from '../actions/userActions'



function Login(){

    let dispatch = useDispatch();
    let history = useHistory();

    let user = useSelector(state => state.user);

    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");

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
          <TextField variant="outlined" label="Name" value={name} onChange={function(event){
            setName(event.target.value);
          }}></TextField>
          <TextField variant="outlined" label="Phone" value={phone} onChange={function(event){
            setPhone(event.target.value);
          }}></TextField>
          <Button variant="contained" color="primary" onClick={
            function(){
              console.log(name, phone);
              dispatch(login({name, phone}));
              history.push("/home");
            }
          }>Submit</Button>

          {user ? "Loged In" : "Loged Out"}
        </Box>
      </Box>
    
}

export default Login;