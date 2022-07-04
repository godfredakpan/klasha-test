import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/Dashboard'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/calender',
    component: Blank,
  },
  {
    path: '/users',
    component: Blank,
  },
  {
    path: '/message',
    component: Blank,
  },
  {
    path: '/settings',
    component: Blank,
  },
]

export default routes
