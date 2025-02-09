import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ImagePage } from "./components/ImagePage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/image/:imageId" element={<ImagePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
