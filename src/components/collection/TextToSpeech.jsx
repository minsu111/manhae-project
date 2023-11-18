import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  const [utterance, setUtterance] = useState(null);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // 다국어 처리
  const language = sessionStorage.getItem("language");

  const splitTextIntoChunks = (text) => {
    const sentences = text.text.match(/[^.!?]+[.!?]+/g) || [text];
    return sentences;
  };

  const speakChunks = (chunks) => {
    const synth = window.speechSynthesis;

    const speakChunk = (index) => {
      if (index < chunks.length) {
        const u = new SpeechSynthesisUtterance(chunks[index]);
        u.rate = 1;

        const voices = synth.getVoices();
        if (voices.length) {
          u.voice = voices.find((voice) =>
            language === "Ko"
              ? voice.name === "Google 한국의"
              : voice.name === "Google UK English Male"
          );
        }

        synth.speak(u);
        u.onend = () => {
          if (index === chunks.length - 1) {
            setIsPlaying(false);
          }
          speakChunk(index + 1);
        };
      }
    };

    speakChunk(0);
  };

  useEffect(() => {
    if (text === null || text === undefined) {
      return;
    }
    const synth = window.speechSynthesis;
    const textWithoutParentheses = text.replace(
      /\([^()]*\)|\[[^\]]*\]|[\p{Script=Han}]/gu,
      ""
    );
    const u = new SpeechSynthesisUtterance(textWithoutParentheses);
    u.rate = 1;

    const handleVoicesChanged = () => {
      const voices = synth.getVoices();

      if (voices.length) {
        // u.voice = voices.find((voice) => voice.name === "Google 한국의");
        setVoicesLoaded(true);
        setUtterance(u);
      }
    };

    handleVoicesChanged();

    synth.onvoiceschanged = handleVoicesChanged;

    return () => {
      synth.cancel();
      synth.onvoiceschanged = null;
    };
  }, [text]);

  const handleTogglePlay = () => {
    if (voicesLoaded && utterance) {
      const synth = window.speechSynthesis;
      const chunks = splitTextIntoChunks(utterance);
      if (isPlaying) {
        synth.cancel();
      } else {
        speakChunks(chunks);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      {text ? (
        <button onClick={handleTogglePlay} style={{ all: "unset" }}>
          <img
            src={
              isPlaying
                ? "/assets/image/soundOffBtn121.png"
                : "/assets/image/soundOnBtn121.png"
            }
            alt={isPlaying ? "소리 끄기 버튼" : "소리 켜기 버튼"}
            style={{ width: "3vw" }}
          />
        </button>
      ) : null}
    </div>
  );
};

export default TextToSpeech;
