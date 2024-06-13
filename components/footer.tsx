import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import Link from 'next/link'

const Footer = () => {
    const Links = [
        {
            href: '',
            icon: <GitHubIcon className='h-6 w-6'/>
        },
        {
            href: '',
            icon: <EmailIcon className='h-6 w-6'/>
        },
    ]
  return (
    <div className='pt-24'>
      <div className='px-6 pb-8 mx-auto max-w-7xl lg:px-8'>
        <div className='pt-8 mt-16 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24'>
        <div className='flex space-x-6 md:order-2'>
          {Links.map((link, index) => (
            <Link href={link.href} key={index} className='text-slate-100/50 hover:text-slate-100 transition duration-300'>
              {link.icon}
            </Link>
          ))}
        </div>
        <p className='mt-8 text-xs text-slate-100/50 md:order-1 md:mt-0'>© Thousand Dreams Studio. All rights</p>
        </div>
        </div>
    </div>
    
  )
}

export default Footer