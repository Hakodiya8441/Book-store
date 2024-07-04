import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
const FreeBook = () => {
    const filterData = list.filter((data)=>data.category === "Free")
    console.log(filterData)

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
<div>
<h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
<p>According to a software development firm, an e-catalogue delivers vital information about
product specifications to potential customers.It makes it easier for potential customers to find
the items they want in the format they want.</p>
</div>
    
    <div>
    <Slider {...settings}>
        {
          filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))
        }
      </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook