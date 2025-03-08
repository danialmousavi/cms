import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import UserList from "./pages/users/UserList";

const Routes=[
    {path:'/',element:<Home/>},
    {path:'/products',element:<Products/>},
    {path:'/newuser',element:<NewUser/>},
    {path:'/users',element:<UserList/>},

]
export default Routes