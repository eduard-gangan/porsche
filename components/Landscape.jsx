"use client"


const Landscape = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-[100dvh] z-40 bg-zinc-900 text-zinc-200 text-lg sm:hidden grid place-content-center font-bold">
      <p className="flex items-center gap-4">Turn your phone to landscape
        <img src="/turn.svg" alt="turn your phone to landscape" height={50} width={50}/>
      </p>
    </div>
  )
}

export default Landscape