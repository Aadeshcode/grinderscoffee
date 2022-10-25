import React from "react";
// eslint-disable-next-line
const Menu = React.forwardRef(({ children, ...props }, ref) => (
  <div className="px-0 px-sm-2">
    <div className="d-flex justify-content-start slate-toolbar-wrapper flex-wrap">
      {children}
    </div>
    <hr />
  </div>
));
// eslint-disable-next-line
const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <Menu {...props} ref={ref} />
));

export default Toolbar;
