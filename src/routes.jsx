import Index from "../pages/Index"
import Detail from "../pages/Detail"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

const routes = [
    {path:'/', element:<Index/>},
    {path:'/detail', element:<Detail/>},
    {path:'/login', element:<Login/>},
    {path:'/singup', element:<Signup/>},
]

export default routes