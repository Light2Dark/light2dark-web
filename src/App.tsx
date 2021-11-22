import React from 'react';
import GlobalFonts from './assets/fonts/fonts'
import GlobalStyles from './GlobalStyles';
import {Outlet, Link} from "react-router-dom"

import {Logo, Navbar} from "./components/Header/index"

function App() {
  return (
    <div>
      <GlobalFonts />
      <GlobalStyles />

      <h2>Hi!</h2>

      <main>
        <nav>
          <Link to = "/all">all.</Link>
          <Link to = "/web">web.</Link>
          <Link to = "/games">games.</Link>
          <Link to = "/writing">writing.</Link>
          <Link to = "/contact">contact.</Link>
        </nav>
      </main>
      <Outlet />

    </div>
  );
}

export default App;
