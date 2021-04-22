import produce from "immer";

import { LOGIN, LOGOUT } from "../actions/userActions";

const initial = {
  user: undefined,
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
    default: {
        return state;
    }
  }
};

export default accReducer;
