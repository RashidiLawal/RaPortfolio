"use client"

import React from 'react'
import UseScreenSize from './hooks/UseScreenSize'

const ResponsiveComponent = ({children}) => {

    const size = UseScreenSize()
    console.log(size);
  return (
    <>
    {children({size})}
    </>
  )
}

export default ResponsiveComponent