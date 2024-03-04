import { useState, useEffect } from "react"
import axios from "axios"

function Dashboard (){

    const [totalTeacher, setTotalTeachers] = useState([])
    const [totalSalary, setTotalSalary] = useState([])

    const gettotalTeachers = () => {
        axios.get("http://localhost:3000/teacher/total").then((response) => {
            setTotalTeachers(response.data.total)
            // console.log(response.data)
        }).catch((error) => console.log(error))
    }

    // getting total Salary

    const getTotalSalary = () => {
        axios.get("http://localhost:3000/salary/total").then((response) => {
            setTotalSalary(response.data[0].salary)
        }).catch((error) => console.log(error))
    }



    useEffect(() => {
        gettotalTeachers(),
        getTotalSalary()
    },[])


    return <div>

           <div className="flex  gap-10 justify-center pt-10">

            <div className="w-[300px] h-[200px] text-center border-b-8 border-orange-600 bg-gray-300">
            <i class="fa-solid fa-user mt-10 text-orange-600 text-5xl"></i>
            <hr  />
                <h1 className="text-5xl mt-3 "> {totalTeacher} </h1>
                <p className="font-semibold">Total of Students</p>
            </div>
            <div className="w-[300px] text-center h-[200px] border-b-8 border-green-600 bg-green-200">
            <i class="fa-solid fa-user mt-10 text-orange-600 text-5xl"></i>
            <hr  />
                <h1 className="text-5xl mt-3 "> {totalTeacher > 0 ? totalTeacher : 0} </h1>
                <p className="font-semibold">Total of Students</p>
         
            </div>
            
            <div className="w-[300px] text-center h-[200px] border-b-8 border-blue-600 bg-slate-300">

            <i class="fa-solid fa-dollar-sign mt-12  text-orange-600 text-5xl"></i>
            <hr  />
                <h1 className="text-5xl mt-3 "> ${totalSalary > 0 ? totalSalary : 0} </h1>
                <p className="font-semibold">Total of Students</p>
         
            </div>

            </div> 


    </div>
}

export default Dashboard