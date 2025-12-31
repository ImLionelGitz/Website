import { RefObject, useEffect, useRef, useState } from 'react'

export function useView(options = { threshold: 0.2 }) {
   const ref = useRef(null)
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      const node = ref.current
      if (!node) return

      const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(node) // animate only once
         }
      }, options)

      observer.observe(node)

      return () => observer.disconnect()
   }, [options])

   return [ref, isVisible] as [RefObject<null>, boolean]
}
