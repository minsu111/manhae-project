import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  const [utterance, setUtterance] = useState(null);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const splitTextIntoChunks = (text, chunkSize) => {
    const chunks = [];
    const sentences = text.text.match(/[^.!?]+[.!?]+/g);

    if (sentences) {
      sentences.forEach((sentence) => {
        chunks.push(sentence);
      });
    } else {
      chunks.push(text);
    }
    return chunks;
  };

  const speakChunks = (chunks) => {
    const synth = window.speechSynthesis;

    const speakChunk = (index) => {
      if (index < chunks.length) {
        const u = new SpeechSynthesisUtterance(chunks[index]);
        u.rate = 1;

        const voices = synth.getVoices();
        if (voices.length) {
          u.voice = voices.find((voice) => voice.name === "Google 한국의");
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
        u.voice = voices.find((voice) => voice.name === "Google 한국의");
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
      const chunks = splitTextIntoChunks(utterance, 15);
      if (isPlaying) {
        synth.cancel();
      } else {
        speakChunks(chunks);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ paddingTop: "15%" }}>
      {text ? (
        <button onClick={handleTogglePlay} style={{ all: "unset" }}>
          <img
            src={
              isPlaying
                ? "/assets/image/soundOffBtn121.png"
                : "/assets/image/soundOnBtn121.png"
            }
            alt={isPlaying ? "소리 끄기 버튼" : "소리 켜기 버튼"}
            style={{ width: "50px", height: "50px" }}
          />
        </button>
      ) : null}
    </div>
  );
};

export default TextToSpeech;
