import "./styles.css";
import React, { useState } from "react";

//arrary of objects of rafi songs
const rafiSongs = [
  {
    Name: "Kya hua tera Wada",
    Movie: "Hum Kisise Kum Naheen",
    About:
      "It is a soulful song. One of the most popular song by Mohammed Rafi. Majrooh Sultanpuri has penned this beautiful piece of art.",
    Rating: "4.7",
    Src: "https://music.youtube.com/watch?v=Z5D1dhTMclI&list=RDAMVMZ5D1dhTMclI"
  },
  {
    Name: "Likhe Jo Khat Tujhe",
    Movie: "Kanyadaan",
    About:
      "This song appeared in 1968 socio-romantic drama Kanyadaan. Neeraj had penned the lyrics of this song and Shankar-Jaikishan had scored the music.",
    Rating: "4.6",
    Src: "https://music.youtube.com/watch?v=E1xPY3OiuzI&list=RDAMVME1xPY3OiuzI"
  },
  {
    Name: "Yeh Reshmi Zulfein",
    Movie: "Do Raaste",
    About:
      "The music of the song was composed by Laxmikant Pyarelal and the lyrics were penned by Anand Bakshi.",
    Rating: "4.1",
    Src: "https://music.youtube.com/watch?v=q9aMSJGAkeY&list=RDAMVMq9aMSJGAkeY"
  }
];

//arrary of object of kishore songs
const kishoreSongs = [
  {
    Name: "Mere Sapno Ki Rani",
    Movie: "Hum Kisise Kum Naheen",
    About:
      "Irshaad Kamil has written this gorgeous song. And famous Indian director Sachin Dev Burman has composed this.",
    Rating: "4.7",
    Src: "https://music.youtube.com/watch?v=-Q8mrKJ1Jps&list=RDAMVM-Q8mrKJ1Jps"
  },
  {
    Name: "Chaala Jata Hoon",
    Movie: "Mere Jeevan Sathi",
    About:
      "Voiced by our very own Kishore Kumar. The lyrics of Chala Jata Hoon Song from Mere Jeevan Saathi album are written by Majrooh Sultanpuri.",
    Rating: 4.6,
    Src: "https://music.youtube.com/watch?v=gcYPgf_Nc14&list=RDAMVMgcYPgf_Nc14"
  },
  {
    Name: "Chukar mere man ko",
    Movie: "Yarana",
    About:
      "Composed by Rajesh Roshan and penned by Anjaan. This song can lift your mood anytime of the day.",
    Rating: 4.1,
    Src: "https://music.youtube.com/watch?v=BOLYNw3x1lE&list=RDAMVMBOLYNw3x1lE"
  }
];

//arrary of object of lata songs
const lataSongs = [
  {
    Name: "Lag Jaa Gale",
    Movie: "Woh Jo Hasina",
    About:
      "This iconic song is regarded to be one of songs by which Lata Mangeshkar is remembered. Lata herself considered this song to be among her top six favourite songs.",
    Rating: 4.1,
    Src: "https://music.youtube.com/watch?v=TFr6G5zveS8&list=RDAMVMTFr6G5zveS8"
  },
  {
    Name: "Ek Pyar ka Nagma hai",
    Movie: "Shor",
    About:
      "Sung by Lata mangeshkar and Mukesh. The evergreen old song is written by Santosh Anand and music composed by Laxmikant-Pyarelal.",
    Rating: 4.6,
    Src: "https://music.youtube.com/watch?v=H2BTCPW3Hw8&list=RDAMVMH2BTCPW3Hw8"
  },
  {
    Name: "Tere Bina Zindagi Se Koi Shikwa To Nahin",
    Movie: "Aandhi",
    About:
      "This lovely song from Aandhi is sung by Lata Mangeshkar and Kishore Kumar. Lyrics are penned by Gulzar and legendary R. D. Burman has composed the music.",
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
        <span role="img" aria-label="title">
          🎵
        </span>{" "}
        Old Hit Recommendation
      </h1>
      <div className="container">
        <p>
          <strong>Choose your favourite singer.</strong>
        </p>
        <ul>
          <li key="1" className="li-list" onClick={rafiSongsHandler}>
            Mohammed Rafi
          </li>
          <li key="2" className="li-list" onClick={kishoreSongsHandler}>
            Kishore Kumar
          </li>
          <li key="3" className="li-list" onClick={lataSongsHandler}>
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
                <strong>Movie Name - </strong> <em>{song.Movie}</em>
              </p>
              <p>
                <strong>About - </strong> {song.About}
              </p>
              <p>
                <strong>Rating - </strong>
                <em>{song.Rating}/5 </em>
              </p>
              <p className="song-link">
                <a href={song.Src}>
                  Listen on youtube music{" "}
                  <span role="img" aria-label="play-button">
                    &#9654;&#65039;
                  </span>
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
