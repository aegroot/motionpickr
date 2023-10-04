import React from "react";

export default function Hero() {
  return (
    <>
      <section className="block block--dark block--skewed-left hero">
        <div className="container grid grid--1x2">
          <div>
            <img
              className="hero__image"
              src="../src/assets/images/hero_poster.png"
              alt=""
            />
          </div>
          <header className="block__header hero__content">
            <h1 data-aos="fade-right" className="block__heading">
              Find your way, pick your movies!
            </h1>
            <p className="hero__tagline">
              A quick and easy way to find the movie you want to watch!
            </p>
            {/* <button className="btn btn--stretched btn--secondary">login</button> */}
          </header>
          {/* <picture data-aos="zoom-in">
            <source
              type="image/webp"
              srcset="images/banner.webp 1x, images/banner@2x.webp 2x"
            />
            <source
              type="image/png"
              srcset="images/banner.png 1x, images/banner@2x.png 2x"
            />
            <img className="hero__image" src="images/banner.png" alt="" />
          </picture> */}
        </div>
      </section>
    </>
  );
}
