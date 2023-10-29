import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  const [utterance, setUtterance] = useState(null);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const textWithoutParentheses = text.replace(/\([^()]*\)/g, "");
    let u = new SpeechSynthesisUtterance(textWithoutParentheses);
    u.rate = 1;

    // synth.onvoiceschanged = () => {
    //   const voices = synth.getVoices();

    //   if (voices.length) {
    //     u.voice = voices[168];
    //     setVoicesLoaded(true);
    //     setUtterance(u);
    //   }
    // };

    const handleVoicesChanged = () => {
      const voices = synth.getVoices();

      if (voices.length) {
        u.voice = voices[168];
        setVoicesLoaded(true);
        setUtterance(u);
      }
    };

    synth.onvoiceschanged = handleVoicesChanged;

    return () => {
      synth.cancel();
      synth.onvoiceschanged = null;
    };
  }, [text]);

  const handleTogglePlay = () => {
    if (voicesLoaded && utterance) {
      const synth = window.speechSynthesis;
      if (isPlaying) {
        synth.cancel();
      } else {
        synth.speak(utterance);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default TextToSpeech;
