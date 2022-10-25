import { RESET_EDITOR, UPDATE_EDITOR } from "../constants/globalConstants";

export const resetEditor = () => (dispatch) => {
  dispatch({
    type: RESET_EDITOR,
  });
};
export const updateEditor = () => (dispatch) => {
  dispatch({
    type: UPDATE_EDITOR,
  });
};
