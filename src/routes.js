import Courses from "./pages/courses/Courses";
import Createcourse from "./pages/createpost/Createcourse";
import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import UserList from "./pages/users/UserList";

const Routes=[
    {path:'/',element:<Home/>},
    {path:'/products',element:<Products/>},
    {path:'/products/:Id',element:<Product/>},
    {path:'/newuser',element:<NewUser/>},
    {path:'/users',element:<UserList/>},
    {path:'/courses',element:<Courses/>},
    {path:'/createcourses',element:<Createcourse/>},

]
export default Routes