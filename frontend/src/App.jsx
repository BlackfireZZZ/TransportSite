import './please.css'
import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from "./components/MainPage";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  return (
      <div>
        <Router>
          <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/contact-us" element={<ContactUs/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/our-team" element={<EmployeeCard/>}/>
          </Routes>
        </Router>
      </div>
  );
}


export default App;
