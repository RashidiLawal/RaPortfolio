"use client"
import React from 'react'
import { BtnList } from '@/app/data'
import NavButton from './NavButton'

const Navigation = () => {
    const angleIncrement = 360/BtnList.length;
  return (
    <div className='fixed h-screen flex items-center justify-center w-full'>
        <div className='flex items-center justify-between relative animate-spin-slow'>
        {
            BtnList.map((btn, index) => {
                const angleRad = (index*angleIncrement*Math.PI)/180;
                const radius = 'calc(20vw - 1rem)';
                const x = `calc(${radius}*${Math.cos(angleRad)})`
                const y = `calc(${radius}*${Math.sin(angleRad)})`

                return <NavButton key={btn.icon} x={x} y={y} {...btn} />
                // <button className='absolute' key={index}
                // 
                // >{btn.label}</button>
            })
        }
    </div>
    </div>
  )
}

export default Navigation;
