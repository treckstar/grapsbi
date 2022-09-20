// import { useRef, useCallback } from 'react'
// import { useIsomorphicLayoutEffect } from 'usehooks-ts'
// //import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'
// import { gsap } from 'gsap'

// const useSetStyle = (ref) => {
//   const setter = useRef()

//   useIsomorphicLayoutEffect(() => {
//     if (ref.current) {
//       setter.current = gsap.quickSetter(ref.current, 'css')
//     }
    
// return () => {
//       setter.current = null
//     }
//   }, [ref])

//   const set = useCallback(
//     (value) => {
//       setter.current && setter.current(value)
//     },
//     [setter]
//   )

//   return set
// }

// export default useSetStyle
