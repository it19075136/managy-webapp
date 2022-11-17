import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/WebNavbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';


function App() {
  return (
      <>
      <Navbar/>
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LogIn/>}>
          <Route index element={<HomePage/>} />
          <Route index element={<LogIn/>} />
          </Route>
        </Routes>
      </div>
    </Router></>
  )}
  
export default App;
