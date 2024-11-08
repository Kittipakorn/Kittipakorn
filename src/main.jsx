import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/about'
import Project from './pages/project'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Portfolio from './pages/protfolio'
import Mahidol from './pages/portfolios/mu'
import App from './App'
import BlogKMITL from './pages/blogs/kmitl'

const routers = createBrowserRouter([
  {path: '/',element: <App/>},
  {path: '/about',element: <About/>},
  {path: '/projects',element: <Project/>},
  {path: '/blog',element: <Blog/>},
  {path: '/contact',element: <Contact/>},
  {path: '/portfolio',element: <Portfolio/>},
  {path: '/blogs/kmitl',element: <BlogKMITL/>},
  {path: '/portfolio/mu',element: <Mahidol/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
