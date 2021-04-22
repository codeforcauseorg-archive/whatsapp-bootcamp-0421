import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";


function SignUp(){

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
            }
          }>Submit</Button>
        </Box>
      </Box>
    
}

export default SignUp;