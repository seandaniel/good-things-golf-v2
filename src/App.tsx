import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Single } from "./components/Single";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/image/:imageId" element={<Single />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
