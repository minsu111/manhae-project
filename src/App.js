import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DndProvider } from "react-dnd";
import { MultiBackend } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";

import "./App.scss";
import "./styles/reset.scss";

import { Layout } from "./components/common/layout/Layout";

import Main from "./pages/main/Main";

import Collection from "./pages/collection/Collection";
import CollectionDetail from "./pages/collection/CollectionDetail";

import Commentary from "./pages/commentary/Commentary";

import ManhaeStory from "./pages/manhaeStory/ManhaeStory";
import ManhaeStoryDetail from "./pages/manhaeStory/ManhaeStoryDetail";

import MedalMain from "./pages/medal/MedalMain";
import MakingMedal from "./pages/medal/MakingMedal";
import MedalDetail1 from "./pages/medal/MedalDetail1";
import MedalDetail2 from "./pages/medal/MedalDetail2";
import MedalDetail3 from "./pages/medal/MedalDetail3";

import Quiz from "./pages/quiz/Quiz";
import QuizResult from "./pages/quiz/QuizResult";
import { useState } from "react";
import { QuizScoreContext } from "./context/QuizScoreContext";
import { LanguageContext } from "./context/LanguageContext";

function App() {
  const languageInfo = sessionStorage.getItem("language");
  const [quizScore, setQuizScore] = useState({});
  const [language, setLanguage] = useState(languageInfo ? languageInfo : "Ko");

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <Router>
        <QuizScoreContext.Provider value={{ quizScore, setQuizScore }}>
          <LanguageContext.Provider value={{ language, setLanguage }}>
            <Layout>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/collection" element={<Collection />} />
                <Route
                  path="/collection/detail/:id"
                  element={<CollectionDetail />}
                />
                <Route path="/commentary" element={<Commentary />} />
                <Route path="/manhaeStory" element={<ManhaeStory />} />
                <Route
                  path="/manhaeStory/detail/:id"
                  element={<ManhaeStoryDetail />}
                />
                <Route path="/medal" element={<MedalMain />} />
                <Route path="/medal/1" element={<MedalDetail1 />} />
                <Route path="/medal/2" element={<MedalDetail2 />} />
                <Route path="/medal/3" element={<MedalDetail3 />} />
                <Route path="/medal/making" element={<MakingMedal />} />
                <Route path="/quiz/:id" element={<Quiz />} />
                <Route path="/quiz/result" element={<QuizResult />} />
              </Routes>
            </Layout>
          </LanguageContext.Provider>
        </QuizScoreContext.Provider>
      </Router>
    </DndProvider>
  );
}

export default App;
