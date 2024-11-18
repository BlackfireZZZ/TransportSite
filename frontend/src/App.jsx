import './please.css'
import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from "./components/MainPage";
import FeedbackForm from "./components/FeedbackForm";
import Services from "./components/Services";
import PhotoSlider from "./components/PhotoSlider";
import CompareImages from "./components/CompareImages";
import BeforePhoto from './assets/logistics1.jpg';
import AfterPhoto from './assets/logistics2.jpg';

function App() {
  return (
      <div>
        <Router>
          <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/contact-us" element={<FeedbackForm/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/test" element={<CompareImages beforeImage={BeforePhoto} afterImage={AfterPhoto}/>}/>
          </Routes>
        </Router>
      </div>
  );
}


export default App;
