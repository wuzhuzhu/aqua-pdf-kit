import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route, BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import Home from './pages/home';
import Teams from './pages/Teams';
import Pdf from './pages/pdf';
import Privacy from './pages/privacy';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="pdf" element={<Pdf />} />
          <Route path="pdf/:url/:page" element={<Pdf />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
