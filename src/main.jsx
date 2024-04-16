import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Internships from "./pages/Internships.jsx";
import NewGrad from "./pages/NewGrad.jsx";
import Experienced from "./pages/Experienced.jsx";
import Home from './routes/Home.jsx';
import JobDetails from './pages/jobDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route path="/intern" element={<Internships />} />
        <Route path="/new-grad" element={<NewGrad />} />
        <Route path="/experienced" element={<Experienced />} />
        <Route path="/jobDetails/:id" element={<JobDetails />} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
