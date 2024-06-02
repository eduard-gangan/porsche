"use client"

import Banner from "@/components/Banner"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF  } from "@react-three/drei"
import { useRef, useState } from "react"
import Lights from "@/components/Lights"
import * as THREE from "three"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"
import Model from "@/components/Model"

const page = () => {
  

  const model = useRef()
  const controls = useRef()

  const [rotation, setrotation] = useState([Math.PI/18, -Math.PI/3.5, 0])
  const [position, setposition] = useState([5, -2, -15])
  const [scale, setscale] = useState(3)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    // console.log(model.current);
    gsap.to(model.current, {
      scrollTrigger: {
        scrub: true,
        trigger: "#section1",
        start: "top bottom",
        end: "30% 50%",
        // markers: true,
        onUpdate: ({progress, getVelocity}) => {
          setrotation([Math.PI/18, Math.PI/2 * progress - Math.PI/3.5, 0])
          setposition([-10 * progress + 5, -2, -15])
          // console.log(getVelocity());
        }
      }
    })
    gsap.from(".spec", {
      y: "20px",
      opacity: 0,
      // rotateX: "90deg",
      duration: 0.4,
      ease: 'power1.inOut',
      stagger: 0.3,
      scrollTrigger:{
        trigger: "#section1",
        start: "60% bottom"
      }
    })
    gsap.to(model.current, {
      scrollTrigger: {
        scrub: true,
        trigger: "#section2",
        start: "top 50%",
        end: "50% 50%",
        // markers: true,
        onUpdate: ({progress, getVelocity}) => {
          setrotation([Math.PI/18, Math.PI / 3 * progress + Math.PI/5.5, 0])
          // setscale(progress + 3)
          setposition([-5, progress - 2, -15])
          // console.log(getVelocity());
        }
      }
    })
    gsap.to(model.current, {
      scrollTrigger: {
        scrub: true,
        trigger: "#section3",
        start: "top 50%",
        end: "50% 50%",
        // markers: true,
        onUpdate: ({progress, getVelocity}) => {
          setrotation([Math.PI/18, Math.PI / 5 * 3 * progress + Math.PI * 17 / 33, 0])
          setscale(progress / 2 + 3)
          // setposition([-5, progress - 2, -15])
          // console.log(getVelocity());
        }
      }
    })
  }, {scope: "main"})

  return (
    <main className="min-h-screen bg-zinc-900 bg-[url('/bg.svg')]">
      <Banner/>
      <Canvas 
        id="canvas" 
        className="w-screen h-screen+ overflow-hidden min-w-96 min-h-96 aspect-square z-10"
        camera={{near:0.1, far:1000}} 
        style={{
          position: "fixed",
          top: 0,
          left: 0
        }}
      >
        <Lights/>
        <PerspectiveCamera makeDefault position={[0, 0, 0]}/>
        {/* <OrbitControls
          makeDefault
          ref={controls}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(5, -2, -15)}
          onEnd={() => setrotation(controls.current.getAzimuthalAngle())}
        /> */}
        <Model 
          ref={model}
          dispose={null} 
          position={position} 
          rotation={rotation}
          scale={scale}/>
      </Canvas>

      <section id="section1" className="min-h-screen  grid grid-cols-5 place-content-center relative">
        {/* <img src="/swirl2.svg" alt="swirl graphic" className="absolute top-1/2 left-2/3 -translate-y-1/2 w-[100px] h-[100px]" /> */}
        <div className="col-start-4 col-span-2 font-bold max-w-lg w-fit relative bg-zinc-800 rounded-3xl shadow-md spec">
          <h2 className="text-4xl text-zinc-200 p-10 from-red-600 to-red-900 bg-blend-overlay bg-[url('/dots.svg'),_theme('backgroundImage.gradient-to-br')] rounded-[inherit]">Feel the power</h2>
          <div className="text-3xl text-zinc-500 p-8 grid gap-3">
            <p className="spec"><span className="bg-gradient-to-b from-zinc-100 to-zinc-500 text-transparent bg-clip-text">3996ml</span> of pure freedom</p>
            <p className="spec"><span className="bg-gradient-to-b from-zinc-100 to-zinc-500 text-transparent bg-clip-text">517</span> horses under the hood</p>
            <p className="spec">0-100km/h in <span className="bg-gradient-to-b from-zinc-100 to-zinc-500 text-transparent bg-clip-text">3.2s</span></p>
            <p className="spec">Max speed of <span className="bg-gradient-to-b from-zinc-100 to-zinc-500 text-transparent bg-clip-text">296km/h</span></p>
            <p className="spec">Just <span className="bg-gradient-to-b from-zinc-100 to-zinc-500 text-transparent bg-clip-text">1450kg</span> of weight</p>
          </div>
        </div>
      </section>

      <section id="section2" className="min-h-screen relative">
        <div className="h-2/3 w-full bg-[url('/wavy.svg')] absolute bottom-0 left-0 origin-bottom skew-y-[20deg]"></div>
        <div className="absolute text-xl text-zinc-400 bg-zinc-800 bg-[url('/carbon.svg')] rounded-3xl px-6 py-8 z-20 spec shadow-xl shadow-[hsl(0,76%,5%)] top-32 left-32">
          <h3 className="text-zinc-300 font-bold">Rear-mounted engine</h3>
          for imporved acceleration and traction
        </div>
        <div className="absolute text-xl text-zinc-400 bg-zinc-800 bg-[url('/carbon.svg')] rounded-3xl px-6 py-8 z-20 spec shadow-xl shadow-[hsl(0,76%,5%)] top-32 left-1/2">
          <h3 className="text-zinc-300 font-bold">Carbon Fiber Everywhere</h3>
          to reduce as much weight as possible
        </div>
        <div className="absolute text-xl text-zinc-400 bg-zinc-800 bg-[url('/carbon.svg')] rounded-3xl px-6 py-8 z-20 spec shadow-xl shadow-[hsl(0,76%,5%)] bottom-16 left-1/4">
          <h3 className="text-zinc-300 font-bold">Ceramic Composite Brakes</h3>
          for great control in extreme situations
        </div>
      </section>


      <section id="section3" className="min-h-screen relative">
        <div className="absolute text-xl text-zinc-400 bg-zinc-800 bg-[url('/carbon.svg')] rounded-3xl px-6 py-8 z-20 spec shadow-xl shadow-[hsl(0,76%,5%)] top-48 right-32">
          <h3 className="text-zinc-300 font-bold">Adjustable Wing</h3>
          860kg of downforce at 285km/h
        </div>
        <div className="absolute text-xl text-zinc-400 bg-zinc-800 bg-[url('/carbon.svg')] rounded-3xl px-6 py-8 z-20 spec shadow-xl shadow-[hsl(0,76%,5%)] bottom-48 right-32">
          <h3 className="text-zinc-300 font-bold">Titanium Exhaust</h3>
          wake up your neighbours 
        </div>
      </section>
    </main>
  )
}

// useGLTF.preload('/scene.gltf')

export default page