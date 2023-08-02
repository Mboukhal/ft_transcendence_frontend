import { Route, Routes } from 'react-router'
import Home from './Component/Home'
import Chat from './Component/Chat'
import Login from './Component/Login'
import Profile from './Component/Profile'
const RoutesApp = () => {
    return (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />}  />
            <Route path="/play" element={<div><h1 style={{color:'#05AE13'}}>Page Play</h1></div>}  />
            <Route path="/createRoom" element={<div><h1 style={{color:'#05AE13'}}>Page Create Room</h1></div>}  />
            <Route path="/profile" element={<Profile />}  />
            <Route path="*" element={<div><h1 style={{color:'white', fontSize:'25px'}}>404 Page Not Found </h1></div>}  />
          </Routes>
    );
}


export default RoutesApp;