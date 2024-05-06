import './App.css';
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom"
import Signup from './components/Signup/signup';
import Login from './components/Login/login';
import Adminhome from './components/adminhome/adminhome';
import Userhome from './components/userhome/userhome';
import Add from './components/adddepartment/Add';
import Addcourse from './components/addcourses/addcourse';
import Enroll from './components/userhome/enroll';


function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/adminhome",
      element:<Adminhome/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/userhome",
      element:<Userhome/>
    },
    {
      path:"/Add",
      element:<Add/>
    },
    {
      path:"/Addcourse",
      element:<Addcourse/>
    },
    {
      path:"/Enroll",
      element:<Enroll/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={route}>
      </RouterProvider>
    </div>
  );
}

export default App;
