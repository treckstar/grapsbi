// import { useRef, useCallback, useState } from 'react'
// import { useIsomorphicLayoutEffect } from 'usehooks-ts'
// //import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'
// import { gsap } from 'gsap'

// const useTicker = (callback, pause) => {
//   useIsomorphicLayoutEffect(() => {
//     if (!pause && callback) {
//       gsap.ticker.add(callback)
//     }
    
//     return () => {
//         gsap.ticker.remove(callback)
//     }
//   }, [callback, pause])
// }

// export default useTicker
