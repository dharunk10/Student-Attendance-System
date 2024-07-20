import StudentCard from './Components/StudentCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/LoginPage/SignUp';
import Login from './Components/LoginPage/Login';
import ForgetPassword from './Components/LoginPage/ForgetPassword';


function App() {
  return (
    <div>
      <Router>
      <div className="app">
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/student-card" element={<StudentCard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
