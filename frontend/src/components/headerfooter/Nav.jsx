import React from "react";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";
import { BiSolidUserCircle } from "react-icons/bi";

export default function Nav() {
  var LinkData = [
    { name: "Movies", link: "/movie" },
    { name: "Recommended", link: "/recommended" },
    // { name: "Account", link: "/userpage" },
  ];

  return (
    <>
      {/* <svg class="icon icon--white nav__toggler">
          <use xlink:href="images/sprite.svg#menu"></use>
        </svg> */}

      <div className="list nav__list">
        {LinkData.map((LinkData) => (
          <div className="nav__item" key={LinkData.name}>
            <Link to={LinkData.link}>{LinkData.name}</Link>
          </div>
        ))}
      </div>
      <Link to="/userpage">
        <div className="react-icon">
          <BiSolidUserCircle size={50} />
        </div>
      </Link>
    </>
  );
}
