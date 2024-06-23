"use client"
import { ReactLenis } from "@studio-freight/react-lenis"

const SmoothScroller = ({children, ...props}) => {
  return (
    <ReactLenis root {...props} options={{
        duration: 1,
        lerp: 0.1,
        smoothTouch: true,
        touchInertiaMultiplier: 15,
      }}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroller