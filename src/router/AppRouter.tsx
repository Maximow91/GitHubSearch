import {memo} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routeConfig} from './routeConfig'

export const AppRouter = memo(() => {
  return (
    <Routes>
      {Object.values(routeConfig).map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
})
