import { AppBar, Box, Toolbar } from "@material-ui/core";
import bgImage from "../images/wapp.png";

function ChatDetails() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        width: "70vw",
        height: "100vh",
        background: "#0000ff",
      }}
    >
      
        <Toolbar
          style={{
            background: "#e7e7e7",
          }}
        ></Toolbar>

      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        style={{
          width: "100%",
          background: `url(${bgImage})`,
        }}
      ></Box>
    </Box>
  );
}

export default ChatDetails;
