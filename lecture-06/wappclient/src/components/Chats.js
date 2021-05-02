import { Box, Toolbar, AppBar } from "@material-ui/core";
import Contacts from './Contacts';


function Chats() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        width: "30vw",
        height: "100vh"
      }}
    >
        <Toolbar style={{
            background: "#e7e7e7"
        }}></Toolbar>
        <Toolbar style={{
            background: "#ffffff"
        }}></Toolbar>
        <Contacts />

    </Box>
  );
}

export default Chats;
