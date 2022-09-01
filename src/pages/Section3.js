import React, { useEffect, useRef,useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../assets/partners/1.png";
import img2 from "../assets/partners/2.png";
import img3 from "../assets/partners/3.png";
import img4 from "../assets/partners/4.png";
import img5 from "../assets/partners/5.png";
import video from "../assets/Videos/video.mp4"
import "../css/AboutUs.css"
import Results from "./Results";
function Section3() {
  const [muted, setMuted] = useState(true);
  const[show,setShow]=useState(true)
const handleToggleMute = () => {
  setMuted(current => !current)
  setShow(current => !current)
};

  let path = useRef(null);
  let target1 = useRef(null);
  let target2 = useRef(null);
  let target3 = useRef(null);
  let target4 = useRef(null);
  let target5 = useRef(null);
  let svg = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    gsap
      .timeline({
        defaults: { duration: 10 },
        scrollTrigger: {
          trigger: svg,
          scrub: true,
          start: "top " - path.offsetTop,
          end: "bottom top",
        },
      })
      .to(
        target1,
        { motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] } },
        -27
      )
      .to(
        target2,
        { motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] } },
        -24.5
      )
      .to(
        target3,
        { motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] } },
        -22.75
      )
      .to(
        target4,
        { motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] } },
        -21
      )
      .to(
        target5,
        { motionPath: { path: path, align: path, alignOrigin: [0.5, 0.5] } },
        -20
      );
  },[]);

  return (
    <>
  
  <div className=" tracking-wider overflow-x-clip">
  


{/* Section1 */}

<div className='row data'>
<div className='col-4 col-lg-4 '>
</div>

<div className='col-4 col-lg-4 column columnn'>
<div>
  <div className='left'></div>
  <div className='right'></div>
</div>
<h1>We are building
<br />
you a home </h1>
<p>in the world of crypto</p>
</div>
<div  className='col-4 col-lg-4'>
</div>
</div>




      {/* Section 2 */}
<section id="section2">
<video loop autoPlay muted={muted}  className="video-cont">
<source src={video} type="video/mp4"/>
</video>
<div className="row">
<div className="message">- Co-Founders</div>
<div className="mic">

<svg onClick={handleToggleMute} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2795 8.37021C18.1124 8.16334 17.87 8.03132 17.6056 8.00319C17.3411 7.97506 17.0764 8.05312 16.8695 8.22021C16.6626 8.3873 16.5306 8.62972 16.5025 8.89414C16.4744 9.15857 16.5524 9.42334 16.7195 9.63021C17.2247 10.3171 17.4972 11.1475 17.4972 12.0002C17.4972 12.8529 17.2247 13.6833 16.7195 14.3702C16.6003 14.5172 16.5252 14.6949 16.503 14.8829C16.4808 15.0708 16.5124 15.2612 16.5941 15.4319C16.6757 15.6026 16.8042 15.7466 16.9645 15.8472C17.1247 15.9478 17.3103 16.0009 17.4995 16.0002C17.6489 16.0007 17.7965 15.9677 17.9315 15.9037C18.0665 15.8397 18.1854 15.7462 18.2795 15.6302C19.0727 14.5863 19.5022 13.3113 19.5022 12.0002C19.5022 10.6891 19.0727 9.41413 18.2795 8.37021V8.37021Z" fill="white"></path><path d="M19.64 5.22806C19.5389 5.14408 19.4222 5.08082 19.2966 5.0419C19.171 5.00298 19.039 4.98916 18.9081 5.00122C18.7771 5.01328 18.6499 5.05099 18.5335 5.1122C18.4172 5.17341 18.314 5.25692 18.23 5.35796C18.146 5.459 18.0826 5.57559 18.0437 5.70108C18.0047 5.82656 17.9909 5.95848 18.003 6.08931C18.0151 6.22014 18.0528 6.34731 18.114 6.46357C18.1753 6.57982 18.2589 6.68288 18.36 6.76686C19.162 7.38625 19.8153 8.17697 20.2721 9.08116C20.7289 9.98536 20.9776 10.9802 21 11.9928C20.9776 13.0054 20.7289 14.0002 20.2721 14.9044C19.8153 15.8086 19.162 16.5993 18.36 17.2187C18.2587 17.3026 18.175 17.4056 18.1137 17.5219C18.0523 17.6381 18.0145 17.7653 18.0025 17.8962C17.9904 18.0271 18.0043 18.159 18.0433 18.2845C18.0824 18.41 18.1458 18.5266 18.23 18.6276C18.324 18.7404 18.4418 18.8311 18.5748 18.8933C18.7079 18.9554 18.8531 18.9875 19 18.9873C19.2337 18.9878 19.4601 18.9065 19.64 18.7575C20.6704 17.9525 21.5072 16.927 22.0887 15.7563C22.6701 14.5856 22.9815 13.2996 23 11.9928C22.9815 10.686 22.6701 9.39992 22.0887 8.22923C21.5072 7.05854 20.6704 6.03301 19.64 5.22806ZM14.47 3.11971C14.318 3.03201 14.1455 2.98584 13.97 2.98584C13.7945 2.98584 13.622 3.03201 13.47 3.11971L7 7.56623H2C1.73478 7.56623 1.48043 7.67151 1.29289 7.8589C1.10536 8.04629 1 8.30044 1 8.56545V15.4201C1 15.6851 1.10536 15.9393 1.29289 16.1266C1.48043 16.314 1.73478 16.4193 2 16.4193H7L13.41 20.8159C13.5856 20.9294 13.7909 20.9885 14 20.9857C14.2652 20.9857 14.5196 20.8805 14.7071 20.6931C14.8946 20.5057 15 20.2515 15 19.9865V3.99902C14.9995 3.81826 14.95 3.64101 14.8566 3.48617C14.7633 3.33132 14.6297 3.20467 14.47 3.11971Z" fill="white">
</path>
{ show ? <Results /> : null }

</svg>

</div>
</div>

</section>

      {/* Section 3 */}
      <div className="h-1/2 md:flex mt-10 section3">
<div className="w-full md:w-[60%] h-full flex flex-col justify-center pl-5 md:pr-16 md:pl-36 space-y-10 bg-black">
  <p className="text-4xl lg:text-7xl font-bold text-white textt">Our Partners</p>
  <p className="text-base lg:text-xl text-gray-400 ">
    On our mission to build the home for crypto natives, we have the
    best networks as our partners. Flint currently supports Ethereum,
    Solana, Tron, and Binance Smart Chain with additional networks on
    the way.
  </p>
</div>
<div className="w-auto hidden lg:block md:w-[40%] mt-10 h-auto ">
  <svg
    ref={(el) => (svg = el)}
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    stroke="white">
    <path
      className="opacity-50"
      id="mainPath"
      ref={(el) => (path = el)}
      strokeDasharray="5,5"
      d=" M 510 137 A 78 190 100 1 1 510 135 z"
    />
  </svg>
  <img
    className="absolute scale-[0.2]"
    ref={(el) => (target1 = el)}
    src={img1}
    alt="1"
  />
  <img
    className="absolute scale-[0.2]"
    ref={(el) => (target2 = el)}
    src={img2}
    alt="2"
  />
  <img
    className="absolute scale-[0.7]"
    ref={(el) => (target3 = el)}
    src={img3}
    alt="3"
  />
  <img
    className="absolute scale-[0.2]"
    ref={(el) => (target4 = el)}
    src={img4}
    alt="4"
  />
  <img
    className="absolute scale-[0.2]"
    ref={(el) => (target5 = el)}
    src={img5}
    alt="5"
  />
</div>
</div>
<div className="h-32"></div>
    </div>
    </>
  );
}

export default Section3;
