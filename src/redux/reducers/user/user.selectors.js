import { createSelector } from "reselect";

const selectUserState = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserState],
  (user) => user.user.data
);

export const selectUserError = createSelector(
  [selectUserState],
  (user) => user.errorModal
);