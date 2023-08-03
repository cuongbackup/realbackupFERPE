import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsList from "./components/NewsList";
// import { Navbar } from "react-bootstrap";
import News from "./components/News";
import MenuForm from "./components/MenuForm";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuForm />
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
