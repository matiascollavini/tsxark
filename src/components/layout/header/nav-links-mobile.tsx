/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export function NavLinksMobileButton ({ links } : { links: any }) {
  const [navLinkOpen, setNavLinkOpen] = useState(false)
  const navLinkRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (navLinkOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleClickOutside = (event: any) => {
      // Verifica si el clic ocurrió fuera del carrito y el botón
      if (
        navLinkRef.current &&
        // @ts-ignore
        !navLinkRef.current.contains(event.target) &&
        buttonRef.current &&
        // @ts-ignore
        !buttonRef.current.contains(event.target)
      ) {
        setNavLinkOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navLinkOpen])

  return (
    <>
      <button
        ref={buttonRef}
        type='button'
        onClick={() => setNavLinkOpen(!navLinkOpen)}
        className='relative z-50'
      >
        <Menu className='h-6 w-6' />
      </button>
      {navLinkOpen && <div className='fixed inset-0 top-16 bg-black/50 z-40' onClick={() => setNavLinkOpen(false)} />}
      <div
        ref={navLinkRef}
        className={`bg-secondary p-5 transition-all duration-300 ease-in-out absolute top-16 -left-4 min-w-[300px] min-h-screen ${navLinkOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto z-50`}
      >
        <div className='h-full w-full flex flex-col justify-start items-start divide-y'>
          {links.map((link: any) => (
            <Link onClick={() => setNavLinkOpen(false)} target={link.target} className='w-full text-center text-white font-semibold text-lg uppercase py-2' key={link.href} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
