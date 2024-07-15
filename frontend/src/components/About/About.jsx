import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
const About = () => {
  return (
    <div className='aboutus' id='aboutus'>
<h4><u>ABOUT US</u></h4>
      <p className='para'> 
      Welcome to [Company Name], where culinary passion meets exceptional service! Since our founding in [Year], we have been dedicated to creating unforgettable dining experiences. Whether it’s a casual meal, a corporate event, or a lavish celebration, we bring together the finest ingredients, innovative menus, and a commitment to excellence that sets us apart.

At [Company Name], our mission is simple: to delight our customers with outstanding food and unparalleled service. We believe that every meal should be a memorable experience, and we take pride in using only the freshest, highest-quality ingredients to craft dishes that are both delicious and nutritious. Our commitment to quality and excellence drives us to continuously explore new culinary trends and techniques, ensuring that our menu offerings are always exciting and innovative.

Our team of talented chefs and service professionals work tirelessly to exceed your expectations. With diverse culinary backgrounds and a shared love for creativity in the kitchen, our team collaborates to bring you exceptional food and service tailored to your needs. We are also dedicated to sustainable practices, sourcing local and seasonal ingredients whenever possible to minimize our environmental impact.

Thank you for choosing [Company Name] to be a part of your special moments. We look forward to serving you and making every meal a memorable experience.

</p>
<h4><u>Meet our founder and CEO</u></h4>

<div className="founder">
    <img src={assets.sv} alt="" />
</div>
    </div>
  )
}

export default About
