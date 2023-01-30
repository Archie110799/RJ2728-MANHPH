import React from 'react';
import { BrowserRouter, Link, Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About';
import Settings from './pages/Settings';
import NestedRoutes from './pages/NestedRoutes';
import Users from './pages/NestedRoutes/pages/Users';
import Roles from './pages/NestedRoutes/pages/Roles';
import Home from './pages/Home';
import Parameter from './pages/Parameter';

import styles from './styles.module.css';
import Search from './pages/Search';

// BrowserRouter
// Routes
// Route ( path, element -> render cpn tuong ung) 
// ->  Route path '*' -> hien 404 not found , 2 la redirect HOME
// test Route 
// Code navigation ( Link, NavLink -> redirect cac trang web)
// List, Form -> 
// -> Detail(id o tren url) ->  Route: path = '/detail/:id'


function ReactRouterExamples() {
  return (
    <div>
      <BrowserRouter>
        {/* NAVIGATION */}
        <ul className={styles.navigation}>
          <li className={styles.link}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.link}>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className={styles.link}>
            <Link to='/settings'>Settings</Link>
          </li>
          <li className={styles.link}>
            <Link to='/parameter/145236/peter'>Parameter</Link>
          </li>
          <li className={styles.link}>
            <Link to='/search?name=Tony&age=27'>Search</Link>
          </li>
          <li className={styles.link}>
            <Link to='/nested-routes'>Nested Routes</Link>
          </li>
        </ul>

        {/* ROUTES SETTINGS */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/settings' element={<Settings />} />

          {/* PARAMETER */}
          <Route path='/parameter/:id/:name' element={<Parameter />} />

          <Route path='/search' element={<Search />} />

          {/* NESTED ROUTES */}
          {/* base layout */}
          <Route path='/nested-routes' element={<NestedRoutes />}>
            {/* INDEX ROUTE */}
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Administrator Area</p>
                </main>
              }
            />
            <Route path='/nested-routes/users' element={<Users />} />
            <Route path='/nested-routes/roles' element={<Roles />} />
          </Route>

          {/* NO MATCH ROUTE */}
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default ReactRouterExamples;
