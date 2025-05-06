import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import About from './Pages/About.jsx'
import Skills from './Pages/Skills.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'

const RouterLayout=()=>{
  return (
    <Layout>
      <ScrollRestoration/>
      <Outlet/>
    </Layout>
  )
}

const router=createBrowserRouter([
  { path:'/',
   element:<RouterLayout/>,
   children:[
    {path:'/', element:<App/>},
    {path:'/about', element:<About/>},
    {path:'/skills', element:<Skills/>},
    {path:'/projects', element:<Projects/>},
    {path:'/contact', element:<Contact/>},

   ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
)
