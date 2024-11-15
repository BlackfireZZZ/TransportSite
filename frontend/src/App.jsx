import './please.css'
import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from "./components/MainPage";
import FeedbackForm from "./components/FeedbackForm";
import Services from "./components/Services";
import PhotoSlider from "./components/PhotoSlider";

function App() {
  return (
      <div>
        <Router>
          <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/feedback" element={<FeedbackForm/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/test" element={<PhotoSlider photos={['logistics1.jpg', 'logistics2.jpg']}/>}/>
          </Routes>
        </Router>
      </div>
  );
}


export default App;
