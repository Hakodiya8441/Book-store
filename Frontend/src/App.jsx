import React, { useState } from "react";
import Home from "./Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import { useAuth } from "./Context/AuthProvider";
// import Logout from "./Components/Logout";

const App = () => {
  const [AuthUser, setAuthUser] = useAuth();
  console.log(AuthUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={AuthUser ? <Courses /> : <Navigate to="/signup" />}
          />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        {/* <Toaster/> */}
      </div>
    </>
  );
};

export default App;
