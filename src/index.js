import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Individual  from './pages/individual/Individual'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/individual" element={<Individual />} />
        </Routes>
    </BrowserRouter>
);
