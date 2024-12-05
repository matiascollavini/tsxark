/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
'use client'

import { Products } from '@/utils/types'
import { ShoppingCart, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export function CartButton () {
  const [cartOpen, setCartOpen] = useState(false)
  const [storageCartList, setStorageCartList]: any = useState([])
  const pathname = usePathname()
  const router = useRouter()
  const cartRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleClickOutside = (event: any) => {
      // Verifica si el clic ocurrió fuera del carrito y el botón
      if (
        cartRef.current &&
        // @ts-ignore
        !cartRef.current.contains(event.target) &&
        buttonRef.current &&
        // @ts-ignore
        !buttonRef.current.contains(event.target)
      ) {
        setCartOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [cartOpen])

  useEffect(() => {
    // Inicializar el carrito si no existe en localStorage
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  }, [])

  useEffect(() => {
    const intervalo = setInterval(() => {
      const storageCartList = JSON.parse(localStorage.getItem('cart') || JSON.stringify([]))
      setStorageCartList(storageCartList)
    }, 1000)

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo)
  }, [])

  const removeItemCart = (item: any) => {
    // Buscar el índice del producto
    const existingItemIndex: any = storageCartList.findIndex((cartItem: any) => cartItem.id === item.id)

    if (existingItemIndex >= 0) {
      if (storageCartList[existingItemIndex].count > 1) {
        // Si el count es mayor que 1, disminuir el count
        storageCartList[existingItemIndex].count -= 1
      } else {
        // Si el count es 1, eliminar el producto
        storageCartList.splice(existingItemIndex, 1)
      }

      // Actualizar el localStorage y el estado del carrito
      localStorage.setItem('cart', JSON.stringify(storageCartList))
      router.refresh()
    }
  }

  return (
    <>
      {pathname !== '/cart'
        ? <button
          ref={buttonRef}
          type='button'
          onClick={() => setCartOpen(prev => !prev)}
          className='relative z-50'
        >
          <ShoppingCart className='h-6 w-6' />
        </button>
        : <div className='h-8 w-8'></div>}
        {cartOpen && <div className='fixed inset-0 top-0 bg-black/50 z-40' onClick={() => setCartOpen(false)} />}
      <div
        ref={cartRef}
        className={`bg-secondary p-5 transition-all duration-300 ease-in-out absolute top-28 -right-4 lg:min-w-[600px] min-h-screen ${cartOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto z-50`}
      >
        <div className='h-full w-full flex flex-col justify-start items-start divide-y'>
          <div className='w-full flex items-center justify-between py-2'>
            <h1 className='font-semibold text-lg uppercase text-white'>Carrito</h1>
          </div>
          <div className='w-full h-full flex flex-col justify-between gap-5 py-1'>
            <div className='w-full flex flex-col justify-start items-start divide-y'>
              {storageCartList.length > 0
                ? storageCartList.map((product: Products) => (
                  <div className='relative flex justify-start h-full w-full py-2 gap-2' key={product.id}>
                    <Link onClick={() => setCartOpen(false)} href={`/products/${product.id}`}>
                      <Image src={product.image.src} className='w-24 aspect-square object-cover' alt={`${product.title} foto`} height={1000} width={1000} />
                    </Link>
                    <div className='w-full flex justify-between items-start px-2'>
                      <div className='h-full flex flex-col'>
                        <p className='lg:text-lg'>{product.title}</p>
                        <div className='flex justify-start items-center gap-3'>
                          US$ {product.price}
                        </div>
                      </div>
                      <button onClick={() => removeItemCart(product)}><Trash2 className='text-red-500 h-5 w-5' /></button>
                    </div>
                  </div>
                ))
                : <div className='p-4 text-white'>No tienes productos en el carrito</div>}
            </div>
            {storageCartList.length > 0 && <div className='w-full border-b'></div>}
            {storageCartList.length > 0 &&
            <div>
              <h2 className='text-lg font-semibold'>TOTAL: US$ {getTotalPrice(storageCartList)}</h2>
            </div>
            }
            {storageCartList.length > 0 &&
            <Link className='px-2' onClick={() => setCartOpen(false)} href={'/carrito'}>
              <button className='w-full bg-white transition hover:opacity-80 rounded-lg font-semibold p-4 uppercase text-center text-black'>Iniciar compra</button>
            </Link>}
          </div>
        </div>
      </div>
    </>
  )
}

export const getTotalPrice = (storageCartList: Products[]) => {
  return storageCartList.reduce((acc: any, product: Products) => acc + product.price, 0)
}
