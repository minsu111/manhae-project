import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DndProvider } from "react-dnd";
import { MultiBackend } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";

import "./App.scss";
import "./styles/reset.scss";

import { Layout } from "./components/common/layout/Layout";

import Main from "./pages/main/Main";

// import Collection from "./pages/collection/Collection";
// import CollectionDetail from "./pages/collection/CollectionDetail";

import Commentary from "./pages/commentary/Commentary";

import ManhaeStory from "./pages/manhaeStory/ManhaeStory";
import ManhaeStoryDetail from "./pages/manhaeStory/ManhaeStoryDetail";

import MedalMain from "./pages/medal/MedalMain";
import MakingMedal from "./pages/medal/MakingMedal";
import MedalDetail1 from "./pages/medal/MedalDetail1";
import MedalDetail2 from "./pages/medal/MedalDetail2";
import MedalDetail3 from "./pages/medal/MedalDetail3";

import Quiz1 from "./pages/quiz/QuizType1";
// import Quiz2 from "./pages/quiz/QuizType2";
import Quiz4 from "./pages/quiz/QuizType4";
import Quiz3 from "./pages/quiz/QuizType3";

// const Main = lazy(() => import("./pages/main/Main"));
const Collection = lazy(() => import("./pages/collection/Collection"));
const CollectionDetail = lazy(() =>
  import("./pages/collection/CollectionDetail")
);
// const Commentary = lazy(() => import("./pages/commentary/Commentary"));
// const ManhaeStory = lazy(() => import("./pages/manhaeStory/ManhaeStory"));
// const ManhaeStoryDetail = lazy(() =>
//   import("./pages/manhaeStory/ManhaeStoryDetail")
// );
// const MedalMain = lazy(() => import("./pages/medal/MedalMain"));
// const MakingMedal = lazy(() => import("./pages/medal/MakingMedal"));
// const MedalDetail1 = lazy(() => import("./pages/medal/MedalDetail1"));
// const MedalDetail2 = lazy(() => import("./pages/medal/MedalDetail2"));
// const MedalDetail3 = lazy(() => import("./pages/medal/MedalDetail3"));
// const Quiz1 = lazy(() => import("./pages/quiz/QuizType1"));
const Quiz2 = lazy(() => import("./pages/quiz/QuizType2"));
const Quiz5 = lazy(() => import("./pages/quiz/QuizType5"));
// const Quiz3 = lazy(() => import("./pages/quiz/QuizType3"));
// const Quiz4 = lazy(() => import("./pages/quiz/QuizType4"));

function App() {
  sessionStorage.setItem("language", "Ko");

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/collection"
              element={
                <Suspense fallback={<div></div>}>
                  <Collection />
                </Suspense>
              }
            />
            <Route
              path="/collection/detail/:id"
              element={
                <Suspense fallback={<div></div>}>
                  <CollectionDetail />
                </Suspense>
              }
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
            <Route
              path="/quiz/:id"
              element={
                <Suspense fallback={<div></div>}>
                  <Quiz2 />
                </Suspense>
              }
            />
            <Route path="/quiz/3" element={<Quiz3 />} />
            <Route path="/quiz/8" element={<Quiz4 />} />
            <Route
              path="/quiz/11"
              element={
                <Suspense fallback={<div></div>}>
                  <Quiz5 />
                </Suspense>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </DndProvider>
  );
}

export default App;
