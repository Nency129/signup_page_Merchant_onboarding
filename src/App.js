import './App.css';
import Login from './compnents/Login';
import PersonalDetails from './compnents/Details/PersonalDetails';
import BusinessDetails from './compnents/Details/BusinessDetails';
import AccountDetails from './compnents/Details/AccountDetails';
import Home from './compnents/Details/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
          <Route
            exact
            path="/"
            element={<Login/>}
          />
          <Route
            exact
            path="/personaldetails"
            element={<PersonalDetails/>}
          />
          <Route
            exact
            path="/businessdetails"
            element={<BusinessDetails/>}
          />
          <Route
            exact
            path="/accountdetails"
            element={<AccountDetails/>}
          />
          <Route
            exact
            path="/home"
            element={<Home/>}
          />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
