import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/layout/Layout";

import { Main } from "./pages/main/Main";

import { Collection } from "./pages/collection/Collection";
import { CollectionDetail } from "./pages/collection/CollectionDetail";

import { Commentary } from "./pages/commentary/Commentary";

import { ManhaeStory } from "./pages/manhaeStory/ManhaeStory";
import { ManhaeStoryDetail } from "./pages/manhaeStory/ManhaeStoryDetail";

import { MedalMain } from "./pages/medal/MedalMain";
import { MakingMedal } from "./pages/medal/MakingMedal";
import { MedalDetail1 } from "./pages/medal/MedalDetail1";
import { MedalDetail2 } from "./pages/medal/MedalDetail2";
import { MedalDetail3 } from "./pages/medal/MedalDetail3";

import { Quiz1 } from "./pages/quiz/Quiz1";

import { DndProvider } from "react-dnd";
import { MultiBackend } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";

import "./App.scss";
import "./styles/reset.scss";
import { Quiz2 } from "./pages/quiz/Quiz2";

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

            <Route path="/quiz/1" element={<Quiz1 />} />
            <Route path="/quiz/2" element={<Quiz2 />} />
            {/* <Route path="/quiz/3" element={<Quiz3 />} /> */}
          </Routes>
        </Layout>
      </Router>
    </DndProvider>
  );
}

export default App;
