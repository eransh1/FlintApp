import React from 'react'
import "../css/Home.css"
import arrow from "../assets/arrow.png"
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";


const Section1 = () => {

  let ele1 = useRef(null)
  let ele2 = useRef(null)
  let ele3 = useRef(null)
  let ele4 = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    var tl1 = gsap.timeline({repeat: -1});
    tl1.to(ele1, {y: -10, duration: 1});
    tl1.to(ele1, {y: 0, duration: 1});

    var tl2 = gsap.timeline({repeat: -1});
    tl2.to(ele2, {y: -10, duration: 1});
    tl2.to(ele2, {y: 0, duration: 1});

    var tl3 = gsap.timeline({repeat: -1});
    tl3.to(ele3, {y: -10, duration: 1});
    tl3.to(ele3, {y: 0, duration: 1});

    var tl4 = gsap.timeline({repeat: -1});
    tl4.to(ele4, {y: -10, duration: 1});
    tl4.to(ele4, {y: 0, duration: 1});

    gsap.to('.leftt', {
      x: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".leftt",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to('.rightt', {
      x: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".rightt",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
    
    const textBoxes = gsap.utils.toArray('.textbox');
    textBoxes.forEach((box, i) => {
      const anim = gsap.fromTo(box, {opacity: 0}, {duration: 1, opacity: 1});
      ScrollTrigger.create({
        trigger: box,
        start: "top 70%",
        animation: anim,
        toggleActions: 'play pause resume reset',
      });
    });
  })

  return (
    <section className='header'>
<div className='top'>
  <div>Start earning high yields on 15 more coins. <span>Download now.</span> <img src={arrow} alt="arrow" /></div> 
</div>
<div className='row data'>
<div className='col-4 col-lg-4 '>
<div  className='leftt first '>
  <span>
    <img ref={el => ele1=el} src={img1} alt="img1" />
  </span>
</div>

<div  className='leftt second'>
  <span>
    <img ref={el => ele2=el} src={img2} alt="img2" />
  </span>
</div>
</div>

<div className='col-4 col-lg-4 column'>
<div>
  <div className='left'></div>
  <div className='right'></div>
</div>
<h1>Earn crypto every <br />
second on Flint</h1>
<p>No lock-in. No hidden fees. Only secure yields for your crypto.</p>
<div className='mt-3 capsule'>
<input className='rounded-pill w-90 w-lg-75 me-3 p-2 search' type="text" placeholder='Enter your email'/>
<button className='btn button'>Start Earning
<img src={arrow} alt="arrow" />
</button>
</div>
</div>
<div  className='col-4 col-lg-4'>
<div className='rightt third'>
  <span>
    <img ref={el => ele3=el} src={img3} alt="img4" />
  </span>
</div>

<div  className='rightt fourth'>
  <span>
    <img ref={el => ele4=el} src={img4} alt="img4" />
  </span>
</div>
</div>
</div>

    </section>
  )
}

export default Section1

