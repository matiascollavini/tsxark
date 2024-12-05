'use client'

import { Badge } from '@/components/ui/badge'
import CustomDialog from '@/components/ui/custom-dialog'
import { Discord, DiscordLarge } from '@/components/ui/icons'
import { Products } from '@/utils/types'
import { Check, ChevronLeft, Copy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page () {
  const [productsSelected, setProductsSelected] = useState([])
  const [messageCopied, setMessageCopied] = useState<boolean>(false)
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('cart') || JSON.stringify([]))
    if (products.length < 1) {
      redirect('/')
    }
    setProductsSelected(products)
  }, [])

  const totalPrice = productsSelected.reduce((acc: number, product: Products) => acc + product.price , 0)

  const parseProducts = productsSelected.map((product: Products) => {
    return `${product.title} | US$ ${product.price}`
  })

  const messageToCopy = `Hola! Tengo mi pedido:\n\n${parseProducts.join('\n')}\n----------------------------------\nTOTAL: US$ ${totalPrice}`


  const handleCopyMessage = async () => {
    await navigator.clipboard.writeText(messageToCopy)
    setMessageCopied(true)
  }
  return (
    <>
      <section className="max-w-screen-xl min-h-screen mx-auto py-20 px-4 lg:px-0">
        <div className='pt-12'>
          <h1 className='text-2xl'>Resumen de la compra</h1>
          <div className='mt-6 p-12 border border-white rounded-lg bg-secondary'>
            <div className='flex flex-col divide-y divide-gray-500'>
              {productsSelected.map((product: Products) => (
                <div key={product.id} className='py-4 first:pt-0'>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3'>
                      <Image className='border border-gray-300 rounded-lg p-2 aspect-square w-20' src={product.image.src} alt={`Foto de ${product.title}`} width={200} height={200} />
                      <div className='flex flex-col'>
                        <span>{product.title}</span>
                        <div>
                          <Badge className="text-black">{product.categoryToShow}</Badge>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className='text-2xl text-gray-100 font-semibold'>US$ {product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-10 pt-6 border-t border-gray-500'>
              <span className='text-3xl font-semibold'>Total: US$ {totalPrice}</span>
              <CustomDialog dontClose className="md:min-w-[800px] [&>button]:hidden" content={<FinishBuy messageCopied={messageCopied} handleCopyMessage={handleCopyMessage} />} title='Finalizar compra'>
                <button
                  className='mt-4 transition bg-gray-200 hover:bg-gray-300 text-black font-semibold w-full flex justify-center rounded-lg py-3'
                >
                  Finalizar compra
                </button>
              </CustomDialog>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

const FinishBuy = ({ messageCopied, handleCopyMessage } : { messageCopied: boolean, handleCopyMessage: () => void }) => {
  return (
    <div className='p-4'>
      <div className="flex flex-col items-center gap-6">
        <p className="text-center text-lg">
          Para continuar la compra, deberás acceder al{" "}
          <span className="inline-flex items-center gap-1">
            <Discord className="fill-blue-400 h-3 w-4" />
            <span className="font-semibold text-blue-400">discord</span>
          </span>{" "}
          y abrir un ticket en el canal de{" "}
          <span className="inline-flex items-center gap-1">
            <span className='bg-gray-900 rounded-lg px-2'># 💰𝐓𝐈𝐄𝐍𝐃𝐀-𝐓𝐈𝐂𝐊𝐄𝐓</span>
          </span>.{" "}
          Luego, seleccioná la opción de tienda virtual, ahí enviarás el mensaje copiado.
        </p>
        <button onClick={handleCopyMessage} className={`font-semibold transition ${messageCopied ? 'hover:bg-green-600 bg-green-500' : 'hover:bg-blue-600 bg-blue-500'} px-8 py-3 rounded-lg`}>
          {messageCopied ? <span className='flex items-center gap-3'>Mensaje copiado <Check className='h-5 w-5' /></span> : <span className='flex items-center gap-3'>Copiar pedido de compra <Copy className='h-5 w-5' /></span>}
        </button>
      </div>
      <div className='mt-12'>
        <div className='flex justify-between items-end'>
          <Link onClick={() => localStorage.setItem('cart', JSON.stringify([]))} href='/' className='flex items-center p-2 transition rounded-lg hover:bg-white/10 gap-1'><ChevronLeft className='h-5 w-5' /> Volver al inicio</Link>
          <div className='flex items-center gap-6'>
            <span>¿Aún no estas en discord?</span>
            <div className='flex gap-1'>
              <Link target='_blank' href='https://discord.gg/tsxark' className='transition bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg'><DiscordLarge className='fill-white w-24' /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}