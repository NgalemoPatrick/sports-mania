// package for the navigation system
import { Outlet, Navigate, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Profile, Register, Login, ResePwd } from './pages'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:id?' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-pwd' element={<ResePwd />} />
      </Routes>
    </div>
  );
}

export default App;
