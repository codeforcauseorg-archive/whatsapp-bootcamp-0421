import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setChat } from "../actions/userActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Contacts() {
  const classes = useStyles();

  const dispatch = useDispatch();

  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/users/").then((output) => {
      setContacts(output.data);
    });
  }, []);

  return (
    <List className={classes.root}>
      {contacts.map((contact) => {
        return (
          <React.Fragment key={contact.firebaseId}>
            <ListItem
              button
              alignItems="flex-start"
              onClick={function () {
                dispatch(setChat(contact));
              }}
            >
              <ListItemAvatar>
                <Avatar alt={contact.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={contact.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {contact.phone}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
