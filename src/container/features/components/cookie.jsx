import React from 'react'
import Kokie from "../components/cookie.jpg"

const Cookie = () => {
  return (
    <div>
       <div className="bg-pink-50 p-16  flex justify-between ">
        <img src={Kokie} alt="img" className="h-56 w-96 " />
        <div className="pt-6">
          <h1 className="">We Have a Best Chef</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Temporibus
            ipsum officia recusandae numquam cupiditate. <br />Animi quam similique,
            veniam at mollitia,<br /> voluptatibus magni ipsa <br /> labore ipsum vero
            expedita, neque non hic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cookie