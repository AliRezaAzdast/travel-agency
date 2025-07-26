import Index from "../pages/Index"
import Detail from "../pages/Detail"
import Login from "../pages/Login"
import Signin from "../pages/Signin"

const routes = [
    {path:'/', element:<Index/>},
    {path:'/detail', element:<Detail/>},
    {path:'/login', element:<Login/>},
    {path:'/signin', element:<Signin/>},
]

export default routes