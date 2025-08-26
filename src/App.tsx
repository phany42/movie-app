export default App;
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages.tsx/Home";
import { Favorites } from  "./pages.tsx/Favorites";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./context.tsx/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}


