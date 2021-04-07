import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ioclient from "socket.io-client";

function App() {
  let [socket, setSocket] = useState();
  let [username, setUsername] = useState("");
  let [text, setText] = useState("");
  let [items, setMessages] = useState([{ username: "anuj", text: "hell" }]);

  let handleClick = () => {
    let io = ioclient("http://localhost:3000/");
    io.on("connect", () => {
      setSocket(io);
      io.on("message", (content) => {
        
        setMessages((prevMsgs) => {
          console.log(items);
          console.log(prevMsgs);
          return [...prevMsgs, content];
        });
      });
    });
  };

  let handleSend = function () {
    socket.emit("message", "Send from client");
  };

  return (
    <div className="App">
      <input
        disabled={socket}
        value={username}
        onChange={function (event) {
          setUsername(event.target.value);
        }}
      ></input>
      <button onClick={handleClick}> Connect </button>
      {socket ? <button onClick={handleSend}>Send</button> : undefined}

      <br />

      {socket ? (
        <React.Fragment>
          <input
            value={text}
            onChange={function (event) {
              setText(event.target.value);
            }}
          ></input>
          <button
            onClick={function () {
              socket.emit("message", { username, text });
              setText("");
            }}
          >
            {" "}
            Send{" "}
          </button>

          <br />

          {items.map(function (message, idx) {
            return (
              <React.Fragment key={idx}>
                <div
                  style={{
                    textAlign: "left",
                  }}
                >
                  {message.username} : {message.text}
                </div>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      ) : undefined}
    </div>
  );
}

export default App;
