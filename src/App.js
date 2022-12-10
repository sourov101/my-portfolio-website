import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },




      ]
    },
    {
      path: '*',
      element: <h1 className='text-amber-500 mt-5 text-4xl font-bold text-center'>Route Not Found. Code: 404</h1>
    },
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
