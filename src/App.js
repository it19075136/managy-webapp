import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/WebNavbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import ResetPassword from './components/ResetPassword';


function App() {
  return (
      <>
      <Navbar/>
      <Router>
      <div className="App">
        <Routes>
          
          <Route index element={<HomePage/>} />
          <Route index element={<LogIn/>} />
          <Route index path="/register" element={<ResetPassword/>} />
          <Route path="/" element={<LogIn/>}>
          </Route>
        </Routes>
      </div>
    </Router></>
  )}
  
export default App;
