import {
  HOVER_LOGO,
  HOVER_LOGO_HALT,
  HOVER_NAV,
  HOVER_NAV_HALT,
  SHORT_NAV,
  SHORT_NAV_HALT,
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
