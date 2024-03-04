import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import TeacherData from "../components/TeacherData"
import axios from "axios"

function Teachers (){

    const [teacherData, setTeacherData] = useState([])
    const [page, setPage] = useState(0)

    const getTeacherData = () => {
        axios.get(`http://localhost:3000/allteachers?page=${page}`).then((res) => {
            setTeacherData(res.data)
        }).catch((error) => console.log(error))
    }

    const handleNextButton = () => {
        setPage(page + 1)
    }
    const handlePrev = () => {
        if(page > 0){
            setPage(page - 1)
        }
    }


    const handleSearchTeacher = (id) => {
        const key = id.target.value
        
        if(key){
            axios.get(`http://localhost:3000/teacher/search/${key}`).then((response) => {
            setTeacherData(response.data)
        }).catch((error) => {
            console.log(error)
        })
        }
        else {
            getTeacherData([])  
        }
    }



    useEffect(() => {
        getTeacherData()
    },[page])

    return <div>
        
        <div className="py-5 flex justify-between">
            <Link to="/addteacher" className="bg-orange-500 text-white px-5 py-3 rounded mb-3">Add Teacher</Link>
            <form className="mr-5">
                <input onChange={handleSearchTeacher} className="w-[350px] pl-10 h-[50px] border-2 border-black rounded" type="text" placeholder="Search teacher" />
            </form>
        </div>


        <table className=" w-full  ">
            <thead className="bg-gray-200">
                <tr className="text-[15px]">
                    <th className="p-3 ">ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    <th>Date</th>
           
                </tr>
            </thead>

            {

             teacherData.length > 0 ?   teacherData.map((data) => {
                    return <TeacherData ID={data.ID} name={data.name} address={data.address} email={data.email} gender={data.gender} salary={data.salary}   date={new Date(data.createdAt).toDateString() } />
                })

                : 
                <p>There is no data yet</p>
            }

        </table>

            <div className="flex gap-5 absolute bottom-0 right-0 justify-end mt-4 mr-3">
        <button onClick={handleNextButton} className="bg-blue-500 px-4 py-2 rounded text-white">Next</button>
        <button onClick={handlePrev} className="bg-blue-500 px-3 py-2 text-white rounded">Prev</button>
            </div>

            
    </div>
}

export default Teachers