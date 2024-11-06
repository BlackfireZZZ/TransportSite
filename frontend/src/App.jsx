import './please.css'
import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from "./components/MainPage";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
      <div>
        <Router>
          {/* <nav> */}
          {/* <Link to="/">Главная </Link>   */}
          {/* <Link to="/beginning">Начало </Link>   */}
          {/* <Link to="/newyear">Новый год </Link> */}
          {/* <Link to='/14th'>14 февраля </Link> */}
          {/* <Link to='/ourwalks'>Наши прогулки </Link> */}
          {/* <Link to='/diff'>Ты разная </Link> */}
          {/* <Link to='/diff1'>(1) </Link> */}
          {/* <Link to='/diff2'>(2) </Link> */}
          {/* <Link to='/diff3'>(3) </Link> */}
          {/* <Link to='/diff4'>(4) </Link> */}
          {/* <Link to='/sea'>Море </Link> */}
          {/* <Link to='/ship'>Корабль </Link> */}
          {/* </nav> */}
          <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/feedback" element={<FeedbackForm/>}/>
          </Routes>
        </Router>
      </div>
  );
}


export default App;
