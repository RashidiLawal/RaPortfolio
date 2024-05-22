import React from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'

const HomeBtn = () => {
  return (
    <Link
        href={"/"}
        target={"_self"}
        className="flex items-center justify-center text-foreground rounded-full custom-bg fixed top-4 left-4 w-fit self-start z-50"
        aria-label={"home"}
        name={"home"}
      >
        <span className="w-14 h-14 relative p-4 hover:text-accent">
            <Home className='w-full h-auto' strokeWidth={1.5}/>  
            <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"/>
            <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            Home
        </span>
        </span>
      </Link>
  )
}

export default HomeBtn