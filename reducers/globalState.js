import {
  HIDE_SHARE_MODAL,
  HOVER_LOGO,
  HOVER_LOGO_HALT,
  HOVER_NAV,
  HOVER_NAV_HALT,
  MOB_NAV_HIDE,
  MOB_NAV_SHOW,
  RESET_EDITOR,
  SHORT_NAV,
  SHORT_NAV_HALT,
  SHOW_SHARE_MODAL,
  TRANSITION,
  TRANSITION_HALT,
  UPDATE_EDITOR,
} from "../constants/globalConstants";

export const NavHoverReducer = (state = "", action) => {
  switch (action.type) {
    case HOVER_NAV:
      return action.payload;
    case HOVER_NAV_HALT:
      return "";
    default:
      return state;
  }
};
export const LogoHoverReducer = (state = false, action) => {
  switch (action.type) {
    case HOVER_LOGO:
      return true;
    case HOVER_LOGO_HALT:
      return false;
    default:
      return state;
  }
};
export const ShortNavReducer = (state = false, action) => {
  switch (action.type) {
    case SHORT_NAV:
      return true;
    case SHORT_NAV_HALT:
      return false;
    default:
      return state;
  }
};
export const TransitionRunningReducer = (state = false, action) => {
  switch (action.type) {
    case TRANSITION:
      return true;
    case TRANSITION_HALT:
      return false;
    default:
      return state;
  }
};
export const mobileNavReducer = (state = false, action) => {
  switch (action.type) {
    case MOB_NAV_SHOW:
      return true;
    case MOB_NAV_HIDE:
      return false;
    default:
      return state;
  }
};
export const resetEditorReducer = (state = false, action) => {
  switch (action.type) {
    case RESET_EDITOR:
      return !state;
    default:
      return state;
  }
};
export const updateEditorReducer = (state = false, action) => {
  switch (action.type) {
    case UPDATE_EDITOR:
      return !state;
    default:
      return state;
  }
};

export const shareModalReducer = (
  state = { show: false, data: "" },
  action
) => {
  switch (action.type) {
    case SHOW_SHARE_MODAL:
      return { show: true, data: action.payload };
    case HIDE_SHARE_MODAL:
      return { show: false, data: "" };
    default:
      return state;
  }
};
