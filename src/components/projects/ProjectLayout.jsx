import React from 'react'
import Link from 'next/link'

const ProjectLayout = ({name, description, date , demolink}) => {
  return (
    <Link 
    href={`${demolink}`}
    target={'_blank'}
    className='text-sm md:text-base flex items-center justify-between w-full rounded-lg relative overflow-hidden p-4 md:p-6 custom-bg'>
        <div className='flex items-center justify-center space-x-2'>
            <h2 className='text-foreground'>
                {name}
            </h2>
            <p className="text-muted hidden sm:inline-block">
                {description}
            </p>
        </div>
        <div className='self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted'/>
        <p className='text-foreground'>
            {new Date(date).toDateString()}
        </p>
    </Link>
  )
}

export default ProjectLayout