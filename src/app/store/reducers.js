import { combineReducers } from "redux";
import redditReducer from "./ducks/reddit/reducer";

export default combineReducers({ reddit: redditReducer });
