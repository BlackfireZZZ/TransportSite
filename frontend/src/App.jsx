import './please.css'
import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from "./components/MainPage";
import FeedbackForm from "./components/FeedbackForm";
import Services from "./components/Services";

function App() {
  return (
      <div>
        <Router>
          <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/feedback" element={<FeedbackForm/>}/>
                <Route path="/services" element={<Services/>}/>
          </Routes>
        </Router>
      </div>
  );
}


export default App;
