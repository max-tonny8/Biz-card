import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import Allcards from "./components/Allcards";
import Newcard from "./components/Newcard";
import Mycards from "./components/Mycards";
import Editcard from "./components/Editcard";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="dark" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="all-cards" element={<Allcards />} />
          <Route path="new-card" element={<Newcard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my-cards">
            <Route index element={<Mycards />} />
            <Route path="edit/:id" element={<Editcard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
