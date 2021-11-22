import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Contact, Games, Web, Writing} from "./routes/index"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App />}>
          <Route path = "web" element = {<Web />} />
          <Route path = "games" element = {<Games />} />
          <Route path = "writing" element = {<Writing />} />
          <Route path = "contact" element = {<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
