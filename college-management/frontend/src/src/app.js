import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Results from './components/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance/:id" element={<Attendance />} />
        <Route path="/results/:id" element={<Results />} />
      </Routes>
    </Router>
  );
}
export default App;
