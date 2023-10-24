import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.scss";
import { Main } from "./pages/main/Main";
import { CollectionInfo } from "./pages/collectionInfo/CollectionInfo";
import { Commentary } from "./pages/commentary/Commentary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/collection" element={<CollectionInfo />} />
        <Route path="/commentary" element={<Commentary />} />
        {/* <Route path="/story" element={} />
        <Route path="/making" element={} />
        <Route path="/quiz" element={} /> */}
      </Routes>
    </Router>
  );
}

export default App;
