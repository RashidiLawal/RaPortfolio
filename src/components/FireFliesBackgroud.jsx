"use client"
import React, {useEffect, useState} from 'react'

const createFireFly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
})

const FireFliesBackgroud = () => {
  const [fireFlies, setFireFlies] = useState([]);

  useEffect(() => {
    const addFireFliesPeriodically = () => {
      const newFireFlies = createFireFly();
      setFireFlies(currentFireFlies => 
        [...currentFireFlies.slice(-14), newFireFlies]
      );
    }
    const interval = setInterval(addFireFliesPeriodically, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
      {
        fireFlies.map((fireFly) => {
          return <div key={fireFly.id}
          className='absolute rounded-full bg-accent w-[20px] h-[20px]'
          style={{
            top: fireFly.top,
            left: fireFly.left,
            animation: `move ${fireFly.animationDuration} infinite alternate`
          }}
          ></div>
        })
      }
    </div>
  )
}

export default FireFliesBackgroud