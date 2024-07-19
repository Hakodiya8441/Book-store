import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast, { Toaster } from 'react-hot-toast'

const Logout = () => {
    const [AuthUser,setAuthUser]= useAuth()
    const handleLogout =()=>{
        try {
            setAuthUser({
                ...AuthUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully...!")
            setTimeout(()=>{
                window.location.reload();
            },3000);
            
        } catch (error) {
            toast.error("Error:"+error.message)
            setTimeout(()=>{},2000)
        }
    }
  return (
    <>
    <Toaster/>
    <div className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</div>
    </>
  )
}

export default Logout