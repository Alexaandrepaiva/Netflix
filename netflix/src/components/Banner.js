import React from 'react';
import "./Banner.css"
import banner from "../img/banner.jpg"


export default function Banner() {
  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: {banner},
        backgroundPosition: "center center",
    }}>
        <div className="banner_contents">
            <h1 className="banner_title">
                Movie Name
            </h1>
        </div>
    </header>
  )
}

