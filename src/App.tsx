import {Link} from 'react-router-dom'
import './App.scss'
import {AppRouter} from './router/AppRouter'
import {getRouteTable, RoutePaths} from './router/routeConfig'

function App() {
  return (
    <>
      <AppRouter />
      <Link to={getRouteTable('1')}>Alalalal</Link>
    </>
  )
}

export default App
