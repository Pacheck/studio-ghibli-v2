import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Navbar } from '../components/layout/navbar';
import { Home } from '../pages/home';

const routes = [
  { id: 1, path: '/', element: <Home /> }
]
const MyRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {
          routes.map((routeProps) => <Route key={routeProps.id} {...routeProps} />)
        }
      </Routes>
    </>
  )
}

export default MyRoutes