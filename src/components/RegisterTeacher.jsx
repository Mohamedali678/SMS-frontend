import { useState } from "react"
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify"

function RegisterTeacher (){

    const [ID, setID] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [salary, setSalary] = useState("")


    // register teacher
    const handleRegisterTeacher = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3000/create/teacher",
        {
          "ID": ID,
          "name": name,
          "address": address,
          "email": email,
          "salary": salary,
          "gender": gender  
        }).then(() =>{

            toast("Teacher has been registered successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false
            })

        }).catch( (error) => console.log(error))
    }


    return <div>
        <h1 className="ml-20 font-bold">Register Teacher</h1>
        <form className="text-center pt-20">
        <input value={ID} onChange={(event) => setID(event.target.value)} className="w-[450px] m-3 pl-10 h-[50px] border-2 border-gray-400 rounded" type="text" placeholder="Enter ID" />
        <input value={name} onChange={(event) => setName(event.target.value)} className="w-[450px] m-3 pl-10 h-[50px] border-2 border-gray-400 rounded" type="text" placeholder="Enter name" />
        <br></br>
        <input value={address} onChange={(event) => setAddress(event.target.value)} className="w-[450px] m-3 pl-10 h-[50px] border-2 border-gray-400 rounded" type="text" placeholder="Enter Address" />
        <input value={gender} onChange={(event) => setGender(event.target.value)} className="w-[450px] m-3 pl-10 h-[50px] border-2 border-gray-400 rounded" type="text" placeholder="Enter Geder" />
        <br></br>
        <input value={salary} onChange={(event) => setSalary(event.target.value)} className="w-[450px] m-3 pl-10 h-[50px] border-2 border-gray-400 rounded" type="text" placeholder="Enter Salary" />
        <input value={email} onChange={(event) => setEmail(event.target.value)} className="w-[450px] m-3 pl-10 h-[50px] border-2 border-gray-400 rounded" type="text" placeholder="Enter Email" />
        <br />
      

        <button onClick={handleRegisterTeacher} className="bg-orange-500 px-16 text-white rounded -ml-[730px] mt-20 py-2 text-3xl">Save</button>
        </form>
        
        <ToastContainer />

    </div>
}

export default RegisterTeacher