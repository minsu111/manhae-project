import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Collection } from "./pages/collection/Collection";
import { Commentary } from "./pages/commentary/Commentary";
import { CollectionDetail } from "./pages/collection/CollectionDetail";
import { Layout } from "./components/common/layout/Layout";

import "./App.scss";
import "./styles/reset.scss";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/detail/:id" element={<CollectionDetail />} />
          <Route path="/commentary" element={<Commentary />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
