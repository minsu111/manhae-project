import React, { useEffect, useState } from "react";
import axios from "axios";

import "./test.scss";

const Test = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiKey = "AIzaSyDRXW624VDeWUCR32CaO6E_fRiyL5PqbOoY";
    const channelId = "UCa_8vw3Qk0NM5WadBdqXh4Q";
    const maxResults = 10; // 표시할 동영상의 최대 개수

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
      )
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  return (
    <div className="test_all_wrapper">
      <h1>YouTube Channel</h1>
      <div className="iframe_wrapper">
        <iframe
          width="50%"
          height="30%"
          src="https://www.youtube.com/embed?listType=playlist&list=UUa_8vw3Qk0NM5WadBdqXh4Q&index=1&autoplay=0"
          title="유튜브 리스트"
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
        <iframe
          width="50%"
          height="30%"
          src="https://www.youtube.com/embed?listType=playlist&list=UUa_8vw3Qk0NM5WadBdqXh4Q&index=2&autoplay=0"
          title="유튜브 리스트"
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
        <iframe
          width="50%"
          height="30%"
          src="https://www.youtube.com/embed?listType=playlist&list=UUa_8vw3Qk0NM5WadBdqXh4Q&index=3"
          title="유튜브 리스트"
        ></iframe>
        <iframe
          width="50%"
          height="30%"
          src="https://www.youtube.com/embed?listType=playlist&list=UUa_8vw3Qk0NM5WadBdqXh4Q&index=4"
          title="유튜브 리스트"
        ></iframe>
      </div>
      <iframe
        width="80%"
        height="100%"
        src="https://www.mpva.go.kr/mpva/contents.do?key=105"
        title="독립유공자 사이트"
      ></iframe>
    </div>
  );
};

export default Test;
