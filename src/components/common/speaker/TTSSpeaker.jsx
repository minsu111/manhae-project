import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../../../context/LanguageContext";

import TTS from "../../../data/TTS";
import TextToSpeech from "../../collection/TextToSpeech";

const TTSSpeaker = ({ setStopPlay, stopPlay }) => {
  const { language } = useContext(LanguageContext);

  const location = useLocation();
  const textLang = "text" + language;
  const ttsList = TTS.filter((object) => object.path === location.pathname);
  const ttsText = ttsList.length > 0 ? ttsList[0][textLang] : "";

  return (
    <div>
      <TextToSpeech
        text={ttsText}
        setStopPlay={setStopPlay}
        stopPlay={stopPlay}
      />
    </div>
  );
};

export default TTSSpeaker;
