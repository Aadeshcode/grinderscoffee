import React, { useState } from "react";
import { useSession } from "next-auth/react";
import AvatarWithRipple from "../components/Avatar";
import Grid from "../components/Stagger";
import MenuActions from "../components/admincomponents/Menuactions";
const DashBoard = () => {
  const { data: session, status } = useSession();
  const [selectedAction, setSelectedAction] = useState("");
  if (status === "authenticated") {
    return (
      <>
        <div className="page-left p-5 bg-warning">
          <div className="d-flex align-items-center">
            <h1>Welcome - {session.user.email}</h1>
            <AvatarWithRipple />
          </div>
          <div>
            <h1 className="display-3">Actions</h1>
            <Grid setSelectedAction={setSelectedAction}/>
          </div>
        </div>
        <div className="page-right">
          {selectedAction === "menu" && <MenuActions />}
        </div>
      </>
    );
  }
  return <a href="/api/auth/signin">Sign in</a>; //eslint-disable-line
};

export default DashBoard;
