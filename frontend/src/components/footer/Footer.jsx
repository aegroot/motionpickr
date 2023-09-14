import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="block block--dark footer">
        <div className="container grid footer__sections">
          <section className="footer__section">
            <div>
              <h2 className="footer__heading">Links</h2>
              <svg className="icon icon--white collapsible__chevron"></svg>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Recommended</a>
                </li>
                <li>
                  <a href="#">Watchlist</a>
                </li>
              </ul>
            </div>
          </section>
          <div className="footer__brand">
            <img src="images/logo.svg" alt="" />
            <p className="footer__copyright">
              Copyright 2023 Ateam development
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
