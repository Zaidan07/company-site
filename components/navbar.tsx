import React from 'react'

const Navbar = () => {
  return (
    <header className='absolute z-30 w-full'>
        <div className='max-w-6xl px-4 mx-auto sm:px-6'>
            <div className='flex items-center justify-between h-16 md:h-20'>
                <a href="/" className='mr-4 shrink-0'>
                <img src="logo.svg" alt="" className='w-20 h-20 ' />
                </a>
                <nav className='flex grow'>
                  <ul className='flex flex-warp items-center justify-end grow'>
                    <li></li>
                  </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar