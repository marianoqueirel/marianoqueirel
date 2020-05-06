import { all, fork, takeLatest } from "redux-saga/effects";

function* getTokenSaga() {
  yield takeLatest("ACTION_TYPE", () => null);
}

function* getRedditPosts() {
  yield takeLatest("ACTION_TYPE", () => null);
}

export default function* redditSaga() {
  yield all([fork(getTokenSaga), fork(getRedditPosts)]);
}
