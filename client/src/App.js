import "./App.css";
import AboutPigmentPond from "./components/AboutPigmentPond.jsx";
import ContactPage from "./components/ContactPage.jsx";
import Gallery from "./components/Gallery.jsx";
import Services from "./components/Services.jsx";
import ShowDeck from "./components/ShowDeck.jsx";
import EnterSite from "./components/EnterSite.jsx";
import Landing from "./components/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<EnterSite />} />
            <Route path="Home" element={<Landing />} />
            <Route path="/AboutPigmentPond" element={<AboutPigmentPond />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/ShowDeck" element={<ShowDeck />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
