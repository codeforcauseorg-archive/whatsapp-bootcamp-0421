import produce from "immer";

import { LOGIN, LOGOUT, SETCHAT, SETSOCKET } from "../actions/userActions";

const initial = {
  user: undefined,
  contact: undefined,
  socket: undefined
};

const accReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN: {
      let payload = action.payload;
      return produce(state, (draft) => {
        draft.user = payload;
      });
    }
    case LOGOUT: {
      return produce(state, (draft) => {
        draft.user = null;
      });
    }
    case SETCHAT: {
      let payload = action.payload;
      return produce(state, (draft) => {
        draft.contact = payload;
      });
    }
    case SETSOCKET: {
      let payload = action.payload;
      return produce(state, (draft) => {
        draft.socket = payload;
      });
    }
    default: {
        return state;
    }
  }
};

export default accReducer;
