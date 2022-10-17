import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../Requests";

export default function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect( () => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1 )
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed amet ex explicabo natus earum, temporibus eum minus nihil, ratione provident maiores architecto deserunt beatae animi aspernatur enim quisquam molestias delectus voluptas. Tempora quidem magni perferendis nam qui commodi soluta consequuntur, minus eveniet exercitationem sunt officia esse similique fugiat tenetur voluptates veniam earum atque beatae. In possimus quas natus odio eos ipsam nisi delectus optio fugit sequi tempore quam tenetur, iusto eaque aperiam. Hic excepturi harum esse odio optio et necessitatibus maiores quo minus quos distinctio ullam, ducimus possimus molestias ipsa similique a voluptatum consequuntur totam sint voluptatem aliquid nulla. Dolorum doloribus ad in quisquam. Exercitationem dicta molestias maiores omnis possimus. Voluptate iure molestias inventore consequatur provident accusantium alias praesentium nostrum consequuntur minima molestiae minus dolorem, voluptatem atque tenetur similique vel dolore, natus repellendus nam beatae quaerat nobis reiciendis. Architecto, quod praesentium deleniti animi distinctio ex debitis, dolorum eligendi illo eius nobis incidunt atque, laboriosam porro. Distinctio, quisquam molestias corrupti ea veniam eos id doloremque dolorum adipisci excepturi magnam, temporibus corporis quis saepe necessitatibus modi hic similique cum pariatur nulla molestiae architecto? Tenetur eaque, doloremque at repellendus earum eligendi facere cupiditate, saepe explicabo consequatur sunt voluptate excepturi tempore eius iusto eum!`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}
