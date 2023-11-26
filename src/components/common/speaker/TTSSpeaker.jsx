import React from "react";

import TTS from "../../../data/TTS";
import { useLocation } from "react-router-dom";
import TextToSpeech from "../../collection/TextToSpeech";

const TTSSpeaker = () => {
  const language = sessionStorage.getItem("language");

  const location = useLocation();
  const textLang = "text" + language;
  const ttsList = TTS.filter((object) => object.path === location.pathname);
  const ttsText = ttsList.length > 0 ? ttsList[0][textLang] : "";
  return (
    <div>
      <TextToSpeech text={ttsText} />
    </div>
  );
};

export default TTSSpeaker;
