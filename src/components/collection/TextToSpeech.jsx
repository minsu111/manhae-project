import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  const [utterance, setUtterance] = useState(null);
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const textWithoutParentheses = text.replace(/\([^()]*\)/g, "");
    let u = new SpeechSynthesisUtterance(textWithoutParentheses);
    u.rate = 1;

    synth.onvoiceschanged = () => {
      const voices = synth.getVoices();

      if (voices.length) {
        u.voice = voices[168];
        setVoicesLoaded(true);
        setUtterance(u);
      }
    };

    return () => {
      synth.cancel();
      synth.onvoiceschanged = null;
    };
  }, [text]);

  const handlePlay = () => {
    if (voicesLoaded) {
      const synth = window.speechSynthesis;
      synth.speak(utterance);
    }
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
  };

  return (
    <div>
      <button onClick={handlePlay} style={{ all: "unset" }}>
        <img
          src={"/image/soundOnBtn121.png"}
          alt={"소리 버튼"}
          style={{ width: "50px", height: "50px" }}
        />
      </button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default TextToSpeech;
