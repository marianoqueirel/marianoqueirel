import * as actionTypes from "./actionTypes";

const initialState = {
  posts: [],
};

export default (state = initialState, { actionType, payload }) => {
  switch (actionType) {
    case actionTypes.SET_REDDIT_POSTS:
      return;
    default:
      return state;
  }
};
