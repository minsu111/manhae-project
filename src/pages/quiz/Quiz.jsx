import { useParams } from "react-router-dom";

import Quiz2 from "./QuizType2";
import Quiz3 from "./QuizType3";
import Quiz4 from "./QuizType4";
import Quiz5 from "./QuizType5";

const Quiz = () => {
  const { id } = useParams();

  if (parseInt(id) > 15) {
    return null;
  }

  return (
    (id === "2" && <Quiz3 />) ||
    (id === "7" && <Quiz4 />) ||
    (id === "10" && <Quiz5 />) || <Quiz2 />
  );
};

export default Quiz;
