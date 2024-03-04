import { useState } from "react"
import { Link } from "react-router-dom"

function Sidenav({children}){

    const [isOpen, setIsOpen] = useState(false)


    const handleIsOpen = () => {
        setIsOpen(true)
    }


    const handleClose = () => {
        setIsOpen(false)
    }

    const logout = () => {
        localStorage.clear()
    }



    return <div>

    <div style={{width: isOpen == true ? "100px" : ""}} className="bg-blue-500 text-white h-screen transition-all duration-500 w-[20%] fixed border-r-4 border-gray-400">   
        
    <i onClick={handleIsOpen} style={{display: isOpen === true ? "none" : ""}} class="fa-solid fa-xmark text-4xl absolute right-2"></i>

    <i style={{display: isOpen === true ? "block" : "none"}} onClick={handleClose} class="fa-solid fa-bars text-4xl ml-10 mt-3"></i>

        <div className="text-2xl flex flex-col space-y-14 pt-28 pl-10">
            {isOpen === true? <i class="fa-brands fa-microsoft"></i> : 
            <Link to="/dashboard"> <i class="fa-brands fa-microsoft"></i> Dashboard</Link>}
            {isOpen === true ?  <i class="fa-solid fa-user"></i> : 
            
            <Link to="/students"> <i class="fa-solid fa-user"></i> Students</Link> }
            {isOpen === true ? <i class="fa-solid fa-chalkboard-user"></i> : 
            <Link to="/teachers"> <i class="fa-solid fa-chalkboard-user"></i> Teachers</Link> }
            {isOpen === true ? <i class="fa-solid fa-file"></i> : 
            <Link to="/documents"> <i class="fa-solid fa-file"></i> Documents</Link> }
            {isOpen === true ?  <i class="fa-solid fa-right-from-bracket"></i> : 
            <Link  to="/" onClick={logout} > <i  class="fa-solid fa-right-from-bracket"></i> Logout</Link> }
        </div>
    </div>

    <div  className={` ${isOpen === true? "ml-[120px]" : "ml-[21%]" }   transition-all duration-500`}>
        {children}
    </div>

    </div>
}

export default Sidenav