import React from 'react'
import { Separator } from './ui/separator'

const Work = () => {
  return (
    <div className='text-center'>
        <h1 className='pb-4 font-bold tracking-tight text-5xl lg:text-6xl'>Our Work</h1>
        <div className='flex items-center justify-center'>
            <Separator className='mt-3 bg-slate-100/20 h-0.5 w-40'/>
        </div>
    </div>
  )
}

export default Work