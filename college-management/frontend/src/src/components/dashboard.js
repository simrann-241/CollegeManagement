import { useLocation, Link } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const { user, role } = location.state;

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      {role === 'student' && (
        <>
          <Link to={`/attendance/${user.student_id}`}>View Attendance</Link><br />
          <Link to={`/results/${user.student_id}`}>View Results</Link>
        </>
      )}
    </div>
  );
}
export default Dashboard;
