import React from 'react';
import "./Banner.css"

export default function Banner() {

    function truncate(string, n) { 
        return string?.length
    }


  return (
    <header className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCpHFfswnSmS7dl9vWxzDba6rXcov8rrRX4lgsWMz&s")`,
        backgroundPosition: "center center",
    }}>
        <div className="banner_contents">
            <h1 className="banner_title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My list</button>
            </div>
            <h1 className="banner_description">This is a test discription</h1>
        </div>

        <div className="banner--fadeBottom"/>
    </header>
  )
}

