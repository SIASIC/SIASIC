import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))

const FormCutiDash = lazy(() => import('../pages/formCuti/Index'))
const FormCutiInput = lazy(()=> import('../pages/formCuti/Forms'))
const FormCutiEdit = lazy(()=> import('../pages/formCuti/FormsViewEdit'))

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
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
    roles : ['1', '2', '3'],
  },
  {
    path: '/form-cuti',
    component: FormCutiDash,
    roles : ['1', '2', '3'],
  },
  {
    path: '/form-cuti/add',
    component: FormCutiInput,
    roles: ['1','2','3']
  },
  {
    path: '/form-cuti/edit',
    component: FormCutiEdit,
    roles: ['1','2','3']
  },
  {
    path: '/forms',
    component: Forms,
    roles : ['1', '2', '3'],
  },
  {
    path: '/cards',
    component: Cards,
    roles : ['1', '2', '3'],
  },
  {
    path: '/charts',
    component: Charts,
    roles : ['1', '2', '3'],
  },
  {
    path: '/buttons',
    component: Buttons,
    roles : ['1', '2', '3'],
  },
  {
    path: '/modals',
    component: Modals,
    roles : ['1', '2', '3'],
  },
  {
    path: '/tables',
    component: Tables,
    roles : ['1', '2', '3'],
  },
  {
    path: '/404',
    component: Page404,
    roles : ['1', '2', '3'],
  },
  {
    path: '/blank',
    component: Blank,
    roles : ['1', '2', '3'],
  },
]

export default routes
