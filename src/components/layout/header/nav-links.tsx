/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import { CartButton } from './cart'
import { NavLinksMobileButton } from './nav-links-mobile'
import Logo from '@/components/custom-ui/logo'

export default function NavLinks ({ links } : { links: any }) {
  return (
    <>
      <div className="hidden w-full lg:flex justify-between items-center max-w-screen-xl mx-auto">
        <Link href='/'>
          <Logo className='w-20' />
        </Link>
        <div className='flex justify-center items-center gap-12'>
          {links.map((link: any) => (
            <Link target={link.target} className='font-semibold text-xl uppercase' key={link.href} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        <CartButton />
      </div>
      <div className='lg:hidden mx-3 w-full flex justify-between items-center'>
        <NavLinksMobileButton links={links} />
        <Link href='/'>
          <Logo className='w-20' />
        </Link>
        <CartButton />
      </div>
    </>
  )
}
