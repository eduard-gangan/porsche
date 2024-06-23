"use client"
import { useEffect, useRef } from "react"

const Fullscreen = () => {
  const el = useRef()
  return (
    <div ref={el} className="z-30 fixed top-0 left-0 h-screen w-screen grid place-content-center place-items-center bg-zinc-900">
      <p className="text-center text-xl xsh:text-3xl text-zinc-200 font-bold">For the best experience, go fullscreen</p>
      <button  
        className="text-center text-xl xsh:text-3xl text-zinc-200 uppercase font-bold cursor-pointer mt-6 py-6 w-fit px-10 from-red-600 to-red-900 bg-blend-overlay bg-[url('/dots.svg'),_theme('backgroundImage.gradient-to-br')] rounded-2xl hover:scale-105 transition-transform duration-300"
        onClick={() => {
          document.documentElement.requestFullscreen();
          el.current.remove()
        }}
      >
        Fullscreen
      </button>
    </div>
  )
}

export default Fullscreen