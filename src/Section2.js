import React from 'react'
import "./css/Section2.css"
import img from "./assets/devices.png"
import data from './api/section2Data'
import AOS from "aos"
import 'aos/dist/aos.css';



const Section2 = () => {
AOS.init({
  duration:1200,
})
  
  return (
    <>
 <section id='section2'>
   <div className='section2'>
<div className='left-pannel'>
<div  className='image-holder'>
<span className='image-span'>
<span className='image'></span>
<img className='imgg' src={img} alt="device" />
</span>
</div>
</div>

<div className='right-pannel'>
{data.map((item)=>{
  return(<>
    <div className='item-container'>
<div data-aos="fade-up" className='itemm'>
<div className='contents'>
<div  className='headingg'>{item.heading}</div>
<div className='descriptionn'>
{item.p}
</div>
</div>
</div>
</div>
  </>)
})}


</div>

   </div>
 </section>
    </>
  )
}

export default Section2