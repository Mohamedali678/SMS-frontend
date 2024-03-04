import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Documents (){

    const [model, setModel] = useState(false)
    const [file, setFile] = useState(null)
    const [docs, setDocs] = useState([])


    const handleRegisterDocument = (event) => {
        const formData = new FormData()
        formData.append("file", file)

        event.preventDefault()
        axios.post("http://localhost:3000/teacher/file",formData ).then(() => {
            alert("Document has been saved successfully")
        }).catch((error) => console.log(error))
    }

    const handleModel = () => {
        setModel(true)
    }

    const closeModel = (e) => {
        e.preventDefault()
        setModel(false)

    }



    // Getting all documents
    const getAllDocs = () => {
        axios.get("http://localhost:3000/docs").then((response) => {
            setDocs(response.data)
        }).catch((error) => console.log(error))
    }


    useEffect(() => {
        getAllDocs()
    },[])




    return <div>
        <div className="pt-6 mb-10">
        <Link onClick={handleModel} className="bg-orange-500 text-white text-lg p-3 m-3">Upload document</Link>
        </div>

        <div style={{display: model === true ? "flex" : "" }} className="justify-center transition-all duration-500 hidden">

        <form className="bg-blue-200 p-10 rounded-lg shadow-xl w-[500px] h-[300px]">
            
            <input onChange={(event) => setFile(event.target.files[0])} className="border-2 border-black p-5 file:bg-red-500 file:border-0 file:text-white file:p-3" type="file" accept=".pdf" />
            
            <br></br>
            <br></br>
            <br></br>
            <button onClick={closeModel} className="mr-10 bg-orange-500 px-5 py-2 text-white text-lg">Close</button>
            <button onClick={handleRegisterDocument} className="bg-blue-500 px-5 py-2 text-white text-lg">Upload</button>
        </form>

        </div>


        <div className="grid grid-cols-3 space-y-3">

        {
            docs.map((item) => {
                return <div className=" bg-blue-400 w-[300px] h-[200px]">
                    <embed src={`http://localhost:3000/alldocs/${item.file}`} width="300px" height="200px" />
                    <p>{item.createdAt}</p>
                  
                </div>

            })
        }

        </div>





    </div>
}

export default Documents