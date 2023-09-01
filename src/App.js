import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feed, SearchFeed, WatchList } from "./pages";
import { Footer } from "./components";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Feed />} path="/" />
          <Route element={<SearchFeed />} path="/search-feed" />
          <Route element={<WatchList />} path="/watch-list" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
