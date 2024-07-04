import React from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <>
     <div className="flex h-screen justify-center items-center">
        <div className="w-[40%]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            
            <h3 className="font-bold text-2xl">Contact Us</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("text", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-sm text-red-600">This field is required*</span>}
            </div>

            {/* Email */}

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-sm text-red-600">This field is required*</span>}
            </div>

            {/* Password */}

            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                name='text'
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("text", { required: true })}
              />
              <br/>
               {errors.text && <span className="text-sm text-red-600">This field is required*</span>}
            </div>

            {/* Button */}

            <div className=" mt-4">
              <button className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-pink-700 duration-200">
                Submit
              </button>
             
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact