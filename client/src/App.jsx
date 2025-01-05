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
function App() {
  

  return (
    <>
    <div>
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/> 
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
           <Route path="dashboard" element={<Admindashboard/>}/>
           <Route path="products" element={<Adminproducts/>}/>
           <Route path="orders" element={<Adminorders/>}/>
           <Route path="features" element={<Adminfeatures/>}/>
        </Route>
        <Route path="/shop" element={<Shoppinglayout/>}>
        </Route>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
