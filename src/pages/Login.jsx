import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Login() {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()



    const loginAdmin = (e) => {
        e.preventDefault()

        axios.post("http://localhost:3000/admin/login",{
          "username": username,
          "password": password  
        }).then((response) => {
            if(response.data.error){
                alert("Incorrect password or username")
            }
            else {
                alert("Successfully login")
                localStorage.setItem("admin", JSON.stringify(response.data))
                navigate("/dashboard")
            }
        })
    }





    return <div className="h-screen bg-white">

        <div className="flex justify-center mt-32">

        <form className="w-[400px] p-5 rounded shadow-lg h-[300px] bg-blue-500">
            <input  value={username} onChange={(e) => setUsername(e.target.value)} className="border-2 border-gray-400 w-[340px] h-[50px]" type="text" placeholder="Enter username" />
            <br />
            <br />
            <input value={password}  onChange={(e) => setPassword(e.target.value)} className="border-2 border-gray-400 w-[340px] h-[50px]" type="text" placeholder="Enter password" />
            <br />
            <button className="mt-10 px-5 py-2 bg-black text-white" onClick={loginAdmin}>Login</button>
        </form>

        </div>
    </div>
}

export default Login