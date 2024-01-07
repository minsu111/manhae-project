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

import Test from "./pages/test/Test";
import Test1 from "./pages/test/Test1";

function App() {
  sessionStorage.setItem("language", "Ko");

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <Router>
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

            <Route path="/test" element={<Test />} />
            <Route path="/test1" element={<Test1 />} />
          </Routes>
        </Layout>
      </Router>
    </DndProvider>
  );
}

export default App;
