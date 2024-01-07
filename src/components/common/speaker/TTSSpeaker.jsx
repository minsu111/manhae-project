import React from "react";

import TTS from "../../../data/TTS";
import { useLocation } from "react-router-dom";
import TextToSpeech from "../../collection/TextToSpeech";

const TTSSpeaker = ({ category, setStopPlay, stopPlay }) => {
  const language = sessionStorage.getItem("language");

  const location = useLocation();
  const textLang = "text" + language;
  const commentaryText = "text" + language + category;
  const ttsList = TTS.filter((object) => object.path === location.pathname);
  const ttsText = ttsList.length > 0 ? ttsList[0][textLang] : "";
  const commentaryTtsText =
    ttsList.length > 0 ? ttsList[0][commentaryText] : "";

  return (
    <div>
      {location.pathname === "/commentary" ? (
        <TextToSpeech
          text={commentaryTtsText}
          setStopPlay={setStopPlay}
          stopPlay={stopPlay}
        />
      ) : (
        <TextToSpeech
          text={ttsText}
          setStopPlay={setStopPlay}
          stopPlay={stopPlay}
        />
      )}
    </div>
  );
};

export default TTSSpeaker;
