// import { useRef, useCallback, useState } from 'react'
// import { useIsomorphicLayoutEffect } from 'usehooks-ts'
// //import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'
// import Inrtia from 'inrtia'
// import useTicker from '../useTicker'

// const defaultConfig = {
//   friction: 50,
//   rigidity: 0.15,
//   interpolation: 'elastic',
//   perfectStop: true,
//   precisionStop: 0.001,
// }

// const useSpring = ({ config = {}, onUpdate, ...initialValue }) => {
//   const [isRunning, setIsRunning] = useState(true)
//   const inrt = useRef(
//     new Inrtia({
//       value: initialValue,
//       ...{ ...defaultConfig, ...config },
//     })
//   )
//   const prevValue = useRef(initialValue)

//   const onFrame = useCallback(
//     (time, dTime) => {
//       inrt.current.update(Math.min(dTime, 64))
//       onUpdate && onUpdate(inrt.current.value, prevValue.current)
//       //prevValue.current = { ...inrt.current.value }
//     },
//     [onUpdate]
//   )

//   useTicker(onFrame, !isRunning)
//   useIsomorphicLayoutEffect(() => {
//     return () => {
//       inrt.current.stop()
//     }
//   }, [])

//   const set = useCallback(({ config, ...value }) => {
//     if (config) {
//       const { precisionStop, perfectStop, ...interpolationParams } = config
//       inrt.current.interpolationParams = {
//         ...inrt.current.interpolationParams,
//         ...interpolationParams,
//       }

//       if (precisionStop) inrt.current.precisionStop = precisionStop

//       if (perfectStop) inrt.current.perfectStop = perfectStop
//     }
//     inrt.current.to(value)
//   }, [])
//   const stop = useCallback(() => setIsRunning(false), [])
//   const start = useCallback(() => setIsRunning(true), [])

//   return [set, stop, start]
// }

// export default useSpring
