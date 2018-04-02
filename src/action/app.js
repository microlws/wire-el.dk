import * as types from "constant/actionTypes";

export function appWidthUpdate(settings) {
  return function appWidthUpdateDispatch(dispatch) {
    return dispatch({
      type: types.APP_WIDTH_UPDATE,
      settings
    });
  };
}
