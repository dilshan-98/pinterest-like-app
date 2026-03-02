import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from './routes/homepage/homepage.jsx';
import Createpage from './routes/createpage/createpage.jsx';
import Postpage from './routes/postpage/postpage.jsx';
import Authpage from './routes/authpage/authpage.jsx';
import Searchpage from './routes/searchpage/postpage.jsx';
import UserPofilePage from './routes/userprofilepage/userprofilepage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/pin/:id" element={<Postpage />} />
        <Route path="/auth" element={<Authpage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/:username" element={<UserPofilePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
