import './App.css';
// components
import SignUP from './components/Auth/signUp/SignUp';
import Login from './components/Auth/login/Login';
// route
import { Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/signup'/>} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUP />} />
      </Routes>

    </div>
  );
}

export default App;