import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Background from "../Background/Background";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Ebook from "../Ebook/Ebook";

function App() {
  return (
    <div className="app">
      <Header />
      <Background />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ebook" element={<Ebook />} />
      </Routes>
    </div>
  );
}

export default App;
