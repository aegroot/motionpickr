import React from "react";

export default function Logout() {
  const LogoutUser = () => {
    sessionStorage.removeItem("access_token");
    window.location.reload(false);
  };

  if (sessionStorage.getItem("access_token")) {
    return (
      <div>
        <button onClick={LogoutUser} className="btn btn--stretched">
          Logout
        </button>
      </div>
    );
  }
}
