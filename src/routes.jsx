import Index from "../pages/Index"
import Ditail from "../pages/Ditail"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

const routes = [
    {path:'/', element:<Index/>},
    {path:'/detail', element:<Ditail/>},
    {path:'/login', element:<Login/>},
    {path:'/singup', element:<Signup/>},
]

export default routes