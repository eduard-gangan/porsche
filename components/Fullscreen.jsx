"use client"
import { useEffect, useRef } from "react"

const Fullscreen = () => {
  const el = useRef()
  return (
    <div ref={el} className="z-30 fixed top-0 left-0 h-screen w-screen grid place-content-center bg-zinc-950">
      <p className="text-center text-xl xsh:text-3xl text-zinc-200 font-bold">For the best experience, go fullscreen</p>
      <button  
        className="text-center text-xl xsh:text-4xl text-zinc-200 uppercase font-bold cursor-pointer"
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