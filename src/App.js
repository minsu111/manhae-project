import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/layout/Layout";
import { Main } from "./pages/main/Main";
import { Collection } from "./pages/collection/Collection";
import { Commentary } from "./pages/commentary/Commentary";
import { CollectionDetail } from "./pages/collection/CollectionDetail";
import { ManhaeStory } from "./pages/manhaeStory/ManhaeStory";
import { ManhaeStoryDetail } from "./pages/manhaeStory/ManhaeStoryDetail";

import "./App.scss";
import "./styles/reset.scss";
import { MakingMedal } from "./pages/makingMedal/MakingMedal";

function App() {
  sessionStorage.setItem("language", "Ko");

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/detail/:id" element={<CollectionDetail />} />
          <Route path="/commentary" element={<Commentary />} />
          <Route path="/manhaeStory" element={<ManhaeStory />} />
          <Route
            path="/manhaeStory/detail/:id"
            element={<ManhaeStoryDetail />}
          />
          <Route path="/medal" element={<MakingMedal />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
