import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home';

const routes = [
  { id: 1, path: '/', element: <Home /> }
]
const MyRoutes = () => {
  return (
    <Routes>
      {
        routes.map(routeProp => <Route key={routeProp.id} {...routeProp} />)
      }
    </Routes>
  )
}

export default MyRoutes