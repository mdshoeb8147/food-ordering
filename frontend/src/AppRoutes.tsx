import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"

const AppRoutes = () => {
  return (
<Routes>
<Route path="/" element={<Layout/>} /> 
<Route path="/user-profile" element={<span>User-Page </span>} />
<Route path="*" element={<Navigate to='/'/>} /> 


</Routes>
)
}
export default AppRoutes