import {ReactNode} from 'react'
import {RouteProps} from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import TablePage from '../pages/TablePage/TablePage'

export enum AppRoutes {
  MAIN = 'main',
  TABLE = 'table',
}

export const getRouteMain = (): string => '/'
export const getRouteTable = (title: string): string => `/repositories/${title}`

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: getRouteMain(),
  [AppRoutes.TABLE]: getRouteTable(':title'),
}

type RouteConfig = {
  [key in AppRoutes]: RouteProps & {path: string; element: ReactNode}
}

export const routeConfig: RouteConfig = {
  [AppRoutes.MAIN]: {path: RoutePaths[AppRoutes.MAIN], element: <MainPage />},
  [AppRoutes.TABLE]: {
    path: RoutePaths[AppRoutes.TABLE],
    element: <TablePage />,
  },
}
