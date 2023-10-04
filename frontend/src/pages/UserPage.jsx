import React from "react";
import Login from "./Login";
import { AuthHeader } from "../auth/authorization";
import WatchList from "./watchList";

export default function UserPage() {
  if (AuthHeader()) {
    return (
      <>
        <WatchList />
      </>
    );
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
}
