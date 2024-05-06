import './App.css';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom"
import Home from './components/Home/home';
import Login from './components/Login/login'
import Signup from './components/Signup/signup';
import Contact from './components/contact/contact';
function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path:'login',
      element:<Login/>
    },{
      path : 'signup',
      element:<Signup/>
    },
    {
      path:'contactus',
      element:<Contact/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
