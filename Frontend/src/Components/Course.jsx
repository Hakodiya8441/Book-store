import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {

  const [book,setbook]= useState([])
  useEffect(()=>{
    const getBook =async()=>{
       try {
      const res =await axios.get("http://localhost:5000/book");
      console.log(res.data)
      setbook(res.data)
       } catch (error) {
        console.log(error)
       }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
        <div className=" items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Herel :)</span>
          </h1>
          <p className="mt-12">
            The website is clean and straightforward, with a large search bar at
            the top that makes discovering books a breeze. There are several
            subcategories, and books are classified by department, format,
            author, promotions, prizes, languages, and other factors. Amazon.com
            also has a much larger selection of books in several languages than
            any of the other online bookstores listed here. There are also
            audiobooks and magazines available.
          </p>
          <Link to={"/"}>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
