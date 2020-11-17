import { useState } from 'react'
import Link from 'next/link'
import ChevronDown from '../../icons/ChevronDown'
import ChevronUp from '../../icons/ChevronUp'

const links = [
   { name: 'Settings', href: '/settings' },
]

const Dropdown = () => {
   const [isVisible, setIsVisible] = useState(false)

   const handleMouseEnter = () => {
      setIsVisible(true)
   }

   const handleMouseLeave = () => {
      setIsVisible(false)
   }

   const handleLogout = () => {
      console.log('logout')
   }

   return (
      <>
         <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
            <div className={`${isVisible && 'text-theme-gray-900'} flex items-center py-5 pl-6 cursor-pointer`}>
               <span>Guest</span>
               {isVisible ?
                  <ChevronUp className="h-4 w-4 ml-2" />
                  :
                  <ChevronDown className="h-4 w-4 ml-2" />
               }
            </div>
            {isVisible && <div className="origin-top-right absolute right-0 flex flex-col w-40 bg-white rounded px-6 py-4 shadow">
               {links.map(link => (
                  <Link key={link.href} href={link.href}>
                     <a className="hover:text-theme-gray-900 py-2">{link.name}</a>
                  </Link>
               ))}
               <button onClick={handleLogout} className="font-semibold text-left hover:text-theme-gray-900 py-2">Logout</button>
            </div>}
         </div>
      </>
   );
}

export default Dropdown;