import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Home/Dashboard';
import Login from './Pages/Login';
import Numbers from './Pages/Numbers';
import FileReading from './Pages/FileReading';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/random-numbers" element={<Numbers />} />
          <Route path="/excel" element={<FileReading />} />
        </Routes>
    </Router>
  );
}

export default App;
