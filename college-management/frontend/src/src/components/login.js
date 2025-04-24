import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post('http://localhost:5000/login', {
      username, password, role
    });
    if (res.data && !res.data.error) {
      navigate('/dashboard', { state: { user: res.data, role } });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login as</h2>
      <select onChange={e => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login;
