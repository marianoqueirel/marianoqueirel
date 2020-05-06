import { spawn } from "redux-saga/effects";
import redditSaga from "./ducks/reddit/saga";

export default function* rootSaga() {
  yield spawn(redditSaga);
}
