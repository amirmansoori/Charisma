import { combineReducers } from "redux";

import usersReducer from "./users";
import postsReducer from "./posts";
import itemsReducer from "./items";

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  items: itemsReducer,
});

export default rootReducer;
