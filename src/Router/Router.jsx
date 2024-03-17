import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import SignIn from "../Pages/SignIn/SignIn";
import AddBrands from "../Components/AddBrands/AddBrands";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import BrandCategory from "../Components/BrandCategory/BrandCategory";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import PrivateAddProduct from "../PrivateRoute/PrivateAddProduct/PrivateAddProduct";
import PrivateProductDetails from "../PrivateRoute/PrivateProductDetails/PrivateProductDetails";
import PrivateUpdate from "../PrivateRoute/PrivateUpdate/PrivateUpdate";
import PrivateMyCart from "../PrivateRoute/PrivateMyCart/PrivateMyCart";
import AllCars from "../Components/AllCars/AllCars";
import Footer from "../Components/Footer/Footer";
import CarServiceList from "../Pages/service/service";

const MyCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path:'/brandCategory/:brandName',
                element: <BrandCategory></BrandCategory>,
                loader: ({params}) => fetch(`http://localhost:5000/brandsCategory/${params.brandName}`)
            },
            {
                path: '/productDetails/:id',
                element: <PrivateProductDetails> <ProductDetails></ProductDetails> </PrivateProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path:'/brands',
                element:<AddBrands></AddBrands>
            },

            {
                path:'/addProduct',
                element: <PrivateAddProduct> <AddProduct></AddProduct> </PrivateAddProduct>
            },
            {
                path:'/service',
                element: <PrivateAddProduct> <CarServiceList/> </PrivateAddProduct>
            },
            {
                path:"updateProduct/:id",
                element:<PrivateUpdate> <UpdateProduct></UpdateProduct> </PrivateUpdate>,
                loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path:'/myCart',
                element:<PrivateMyCart><MyCart></MyCart></PrivateMyCart>,
               
            },
            
            {
                path : '/allCars',
                element : <AllCars></AllCars>
            },
             
            {
                path:'/signUp',
                element: <SignUp></SignUp>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/contact',
                element:<Footer></Footer>
            }
        ]
    }
])

export default MyCreatedRouter;