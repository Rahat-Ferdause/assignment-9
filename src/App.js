import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Review from "./Components/Review/Review";
import DashBoard from "./Components/DashBoard/DashBoard";
import Questions from "./Components/Questions/Questions";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/DashBoard" element={<DashBoard></DashBoard>}></Route>
        <Route path="/Questions" element={<Questions></Questions>}></Route>
        <Route path="/Review" element={<Review></Review>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
