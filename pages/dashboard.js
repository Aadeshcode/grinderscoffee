import React, { useState } from "react";
import { useSession } from "next-auth/react";
import AvatarWithRipple from "../components/Avatar";
import Grid from "../components/Stagger";
import MenuActions from "../components/admincomponents/Menuactions";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

const DashBoard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedAction, setSelectedAction] = useState("");
  const signOutHandler = () => {
    signOut();
    router.push("/");
  };
  if (status === "authenticated") {
    return (
      <>
        <div className="page-left p-5 bg-warning">
          <div className="d-flex align-items-center">
            <h1>Welcome - {session.user.email}</h1>
            <AvatarWithRipple />
            <FiLogOut onClick={() => signOutHandler()} />
            {/* <span>Logout</span> */}
          </div>
          <div>
            <h1 className="display-3">Actions</h1>
            <Grid setSelectedAction={setSelectedAction} />
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
export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);
    console.log(session);
    if (session?.user?.isAdmin) {
      return { notFound: true };
    }
    return {
      props: { session },
    };
  } catch (error) {
    return { notFound: true };
  }
}
