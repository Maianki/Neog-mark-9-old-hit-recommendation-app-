import "./styles.css";
import React, { useState } from "react";

//arrary of objects of rafi songs
const rafiSongs = [
  {
    Name: "Kya hua tera Wada",
    Movie: "Hum Kisise Kum Naheen",
    Rating: "4.7",
    Src: "https://music.youtube.com/watch?v=Z5D1dhTMclI&list=RDAMVMZ5D1dhTMclI"
  },
  {
    Name: "Likhe Jo Khat Tujhe",
    Movie: "Kanyadaan",
    Rating: "4.6",
    Src: "https://music.youtube.com/watch?v=E1xPY3OiuzI&list=RDAMVME1xPY3OiuzI"
  },
  {
    Name: "Yeh Reshmi Zulfein",
    Movie: "Do Raaste",
    Rating: "4.1",
    Src: "https://music.youtube.com/watch?v=q9aMSJGAkeY&list=RDAMVMq9aMSJGAkeY"
  }
];

//arrary of object of kishore songs
const kishoreSongs = [
  {
    Name: "Mere Sapno Ki Rani",
    Movie: "Hum Kisise Kum Naheen",
    Rating: "4.7",
    Src: "https://music.youtube.com/watch?v=-Q8mrKJ1Jps&list=RDAMVM-Q8mrKJ1Jps"
  },
  {
    Name: "Chaala Jata Hoon",
    Movie: "Mere Jeevan Sathi",
    Rating: 4.6,
    Src: "https://music.youtube.com/watch?v=gcYPgf_Nc14&list=RDAMVMgcYPgf_Nc14"
  },
  {
    Name: "Chukar mere man ko",
    Movie: "Yarana",
    Rating: 4.1,
    Src: "https://music.youtube.com/watch?v=BOLYNw3x1lE&list=RDAMVMBOLYNw3x1lE"
  }
];

//arrary of object of lata songs
const lataSongs = [
  {
    Name: "Lag Jaa Gale",
    Movie: "Woh Jo Hasina",
    Rating: 4.1,
    Src: "https://music.youtube.com/watch?v=TFr6G5zveS8&list=RDAMVMTFr6G5zveS8"
  },
  {
    Name: "Ek Pyar ka Nagma hai",
    Movie: "Shor",
    Rating: 4.6,
    Src: "https://music.youtube.com/watch?v=H2BTCPW3Hw8&list=RDAMVMH2BTCPW3Hw8"
  },
  {
    Name: "Tere Bina Zindagi Se Koi Shikwa To Nahin",
    Movie: "Aandhi",
    Rating: 4.1,
    Src: "https://music.youtube.com/watch?v=8-HnmVg0-O8&list=RDAMVM8-HnmVg0-O8"
  }
];

export default function App() {
  const [songs, setSinger] = useState(rafiSongs);

  //function to to handle event when someone clicks on mohammed rafi
  function rafiSongsHandler() {
    setSinger(rafiSongs);
  }

  //function to to handle event when someone clicks on kishore kumar
  function kishoreSongsHandler() {
    setSinger(kishoreSongs);
  }

  //function to to handle event when someone clicks on lata mangeshkar
  function lataSongsHandler() {
    setSinger(lataSongs);
  }
  return (
    <div className="App">
      <h1>
        <span>🎵</span> Old Hit Recommendation
      </h1>
      <div className="container">
        <p>
          <strong>Choose your favourite singer.</strong>
        </p>
        <ul>
          <li className="li-list" onClick={rafiSongsHandler}>
            Mohammed Rafi
          </li>
          <li className="li-list" onClick={kishoreSongsHandler}>
            Kishore Kumar
          </li>
          <li className="li-list" onClick={lataSongsHandler}>
            Lata Mangeshkar
          </li>
        </ul>
      </div>

      <div className="songs-list">
        <hr></hr>
        {songs.map((song) => {
          return (
            <div className="song">
              <p>
                <strong className="song-name">{song.Name}</strong>
              </p>
              <p>
                <strong>Movie Name - </strong> <em>{song.Movie}</em>{" "}
              </p>
              <p>
                <strong>Rating - </strong>
                <em>{song.Rating}/5 </em>
              </p>
              <p className="song-link">
                <a href={song.Src}>Listen on youtube music &#9654;&#65039;</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
