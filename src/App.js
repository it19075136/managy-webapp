import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/WebNavbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';


function App() {
  return (
      <>
      <Navbar/>
      <Router>
      <div className="App">
        <Routes>
          <Route index element={<HomePage/>} />
        </Routes>
      </div>
    </Router></>
  )}
  
export default App;
