import { useParams } from "react-router-dom";

import "./quizType.scss";

import Quiz2 from "./QuizType2";
import Quiz3 from "./QuizType3";
import Quiz4 from "./QuizType4";
import Quiz5 from "./QuizType5";

const Quiz = () => {
  const { id } = useParams();

  if (id === "2") {
    return <Quiz3 />;
  } else if (id === "7") {
    return <Quiz4 />;
  } else if (id === "10") {
    return <Quiz5 />;
  } else {
    return <Quiz2 />;
  }
};

export default Quiz;
