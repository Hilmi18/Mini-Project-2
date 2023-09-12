import { useRoutes } from 'react-router'
import Home from './Home'
import Login from './Login/Login'
import Register from './Register/Register'
import ProtectedRoute from './route/ProtectedRoute'
import Order from './Order/Order'
import Cart from './Cart/Cart'
const routes = [
  { path: "/", element: <ProtectedRoute><Home /></ProtectedRoute> },
  { path: "/order/:userId", element: <ProtectedRoute><Order /> </ProtectedRoute> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/cart", element: <ProtectedRoute><Cart /> </ProtectedRoute> }


]
function App() {
  const element = useRoutes(routes)



  return element

}

export default App
