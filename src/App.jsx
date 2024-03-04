import {Route, Routes} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Students from "./pages/Students"
import Teachers from "./pages/Teachers"
import Documents from "./pages/Documents"
import Sidenav from "./components/Sidenav"
import RegisterTeacher from "./components/RegisterTeacher"
import Login from "./pages/Login"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
function App(){

    const isAuth = localStorage.getItem("admin")

    const navigate = useNavigate()

    const handleRefresh = () => {
        if(!isAuth){
            navigate("/")
        }
    }

    useEffect(() => {
        handleRefresh()
    },[])

    return <>
    { isAuth  ? 
    <Sidenav>
    <Routes>
        <Route path="/dashboard" element={<Dashboard />}  />
        <Route path="/students" element={<Students />}  />
        <Route path="/teachers" element={<Teachers />}  />
        <Route path="/documents" element={<Documents />}  />
        <Route path="/addteacher" element={<RegisterTeacher />}  />
    </Routes>
        </Sidenav>
     : 
       <Routes>
       <Route path="/" element={<Login />} />
        </Routes>

}
</> 
    
    


 
}
export default App