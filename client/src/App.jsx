import { Route,Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import Admindashboard from "./pages/admin-view/dashboard"
import Adminproducts from "./pages/admin-view/products"
import Adminorders from "./pages/admin-view/orders"
import Adminfeatures from "./pages/admin-view/features"
import Shoppinglayout from "./components/shopping-view/layout"
import NotFound from './pages/not-found/index'
import Shoppingaccount from "./components/shopping-view/account"
import Shoppingcheckout from "./components/shopping-view/checkout"
import Shoppinghome from "./components/shopping-view/home"
import Shoppinglisting from "./components/shopping-view/listing"
import CheckAuth from "./components/common/check-auth"
import UnauthPage from "./pages/unauth-page"
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/auth-slice";
import React, { useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton"


function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(() => {                 //side effect
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  console.log(isLoading,user);
  
  return (
    <>
    <div>
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
          }>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/> 
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
          }>
           <Route path="dashboard" element={<Admindashboard/>}/>
           <Route path="products" element={<Adminproducts/>}/>
           <Route path="orders" element={<Adminorders/>}/>
           <Route path="features" element={<Adminfeatures/>}/>
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <Shoppinglayout/>
          </CheckAuth>
          }>
           <Route path="account" element={<Shoppingaccount/>}/>
           <Route path="checkout" element={<Shoppingcheckout/>}/>
           <Route path="home" element={<Shoppinghome/>}/>
           <Route path="listing" element={<Shoppinglisting/>}/>
        </Route>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/unauth-page" element={<UnauthPage/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
