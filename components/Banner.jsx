"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const Banner = () => {
  const section = useRef();
  useGSAP(() => {
    gsap.to("h2", {
      opacity: 1,
      translateY: 0,
      duration: 1,
      ease: "power1.inOut",
    })
    gsap.to("h1", {
      opacity: 1,
      // translateY: 0,
      duration: 1,
      ease: "power1.inOut",
      delay: 1,
    })
  }, {scope: section})

  return (
    <section ref={section} className='w-full h-screen p-6 lg:px-16 lg:py-24 relative'>
      {/* <h2 className="font-bold text-3xl lg:text-6xl bg-gradient-to-b from-slate-100 to-slate-600 bg-clip-text text-transparent lg:pb-4 opacity-0 translate-y-4">Experience German Engineering</h2> */}
      <h1 className="absolute left-40 top-1/2 -translate-y-1/2 font-bold text-center text-[calc(1.5rem+5vh)] bg-gradient-to-b text-slate-300 lg:pb-4 opacity-0 font-porsche z-20 [text-shadow:8px_8px_black]">Porsche <br />
        <span className="italic">911</span>
      </h1>
      <div className="h-2/3 w-full bg-[url('/wavy.svg')] absolute bottom-0 left-0 origin-bottom skew-y-[-20deg]"></div>
    </section>
  )
}

export default Banner