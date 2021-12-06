import USERS from "../components/USERS";
import EVENTS from "../components/EVENTS";

export const initialState = {
  events: EVENTS,
  notify: true,
  users: USERS,
};

export const Reducer = (state = initialState, action) => {
  if (action.type === "HIDE") {
    return { ...state, notify: false };
  }
  return state;
};
