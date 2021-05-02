import { Box, Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../actions/userActions";
import ChatDetails from "../components/ChatDetails";
import Chats from "../components/Chats";
import firebase from "../utils/firebase";
import ioclient from "socket.io-client";

import { setSocket } from "../actions/userActions";

function Home() {
  let user = useSelector((state) => state.user);
  let contact = useSelector((state) => state.contact);
  let dispatch = useDispatch();
  let history = useHistory();

  // console.log(firebase.auth().currentUser.getIdToken());
  useEffect(() => {
    if (!user) {
      history.push("/login");
      return <div></div>;
    }

    user.getIdToken().then(function (token) {
      console.log(token);
      console.log(user.displayName);

      let socket = ioclient("http://localhost:8000", {
        extraHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      socket.on("connect", function () {
        dispatch(setSocket(socket));

        socket.on("message", function (content) {
          console.log(content);
        });
        
      });
    });
  }, []);

  return (
    <Box
      display="flex"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Chats />
      {contact ? <ChatDetails /> : undefined}
    </Box>
  );
}

export default Home;
