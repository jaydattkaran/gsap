import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  // const boxRef = useRef()

  // useGSAP(()=>{
  //   gsap.from(boxRef.current,{
  //     x:-600,
  //     delay:0.5,
  //     duration:1,
  //     rotate:360,
  //     borderRadius:"50%"
  //   })
  // })

  const [xValue, setxValue] = useState(0)
  const [yValue, setyValue] = useState(0)
  const [rValue, setrValue] = useState(0)
  const randomX = gsap.utils.random(-500,500,3)
  const randomY = gsap.utils.random(-200,200,3)
  const randomR = gsap.utils.random(-360,360,3)


  // const { constextSafe } = useGSAP() 

  // const rotateBox = constextSafe(()=> {
  //   useGSAP(()=>{
  //     gsap.to(".box",{
  //       x:randomX,
  //       y:randomY,
  //       rotate:randomR,
  //       duration:0.5,
  //     })
  //   },{scope:'main',dependencies:[xValue, yValue, rValue]})
  // })

  useGSAP(()=>{
    gsap.to(".box",{
      x:randomX,
      y:randomY,
      rotate:randomR,
      duration:0.5,
    })
  },{scope:'main',dependencies:[xValue, yValue, rValue]})

  return (
    <main>
      
      {/* <div className='container'>
        <div className='circle'></div>
        <div ref={boxRef} className='box'></div>
      </div>
      <div className='second-container'>
        <div className='circle'></div>
        <div className='box'></div>
      </div> */}


        <button >Animate</button>
        <div onMouseEnter={()=>{
          setxValue(randomX)
          setyValue(randomY)
          setrValue(randomR)
        }} className='box'>Touch me if you can!</div>

    </main>
  )
}

export default App