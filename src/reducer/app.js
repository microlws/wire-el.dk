import * as type from "constant/actionTypes"
import appInitialState from "./appInitialState"

export default function appReducer(state = appInitialState, action) {
  switch (action.type) {
    case type.APP_WIDTH_UPDATE:
      return {
        ...state,
        width: action.settings
      }

    default:
      return state
  }
}
