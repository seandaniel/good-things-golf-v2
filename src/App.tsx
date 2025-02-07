import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ImagePage } from "./components/ImagePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/image/:imageId" element={<ImagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
