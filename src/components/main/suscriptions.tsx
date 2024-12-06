'use client'

import { SuscriptionsTypes } from "@/app/compras/page"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CustomDialog from "@/components/ui/custom-dialog"
import { Discord, DiscordLarge } from "../ui/icons"
import { Check, Copy } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Suscriptions ({ suscriptions } : { suscriptions: SuscriptionsTypes[] }) {
  return (
    <div className={`w-full grid ${suscriptions.length > 2 ? 'grid-cols-3' : suscriptions.length > 1 ? 'grid-cols-2' : 'grid-cols-1' }  gap-6`}>
      {suscriptions.map((suscription: SuscriptionsTypes) => (
        <BillingCard
          key={suscription.title}
          title={suscription.title}
          titleClassName={suscription.color ? `text-${suscription.color}-400` : ''}
          description={suscription.description}
          price={suscription.price}
          buttonMessage={suscription.buttonMessage}
          titleToCopy={suscription.titleToCopy}
        />
      ))}
    </div>
  )
}

function BillingCard ({ title, titleToCopy, description, price, titleClassName, buttonMessage } : { title: string, titleToCopy: string, description: { desc: React.ReactElement }[], price: number, titleClassName?: string, buttonMessage?: string }) {
  const [messageCopied, setMessageCopied] = useState<boolean>(false)
  const messageToCopy = `Hola! Quiero comprar ${titleToCopy}\n\n----------------------------------\nTOTAL: US$ ${price}`
  const handleCopyMessage = async () => {
    await navigator.clipboard.writeText(messageToCopy)
    setMessageCopied(true)
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className={titleClassName}>{title}</CardTitle>
        <CardDescription className="flex flex-col gap-1">
          {description.map((item, index) => (
            <div key={index}>{item.desc}</div>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-5xl font-bold bg-gradient-to-r from-violet-500 to-white bg-clip-text text-transparent">${price}</span><span className="text-xs">/usd</span>
      </CardContent>
      <CardFooter>
      <CustomDialog className="md:min-w-[800px]" content={<FinishBuy handleCopyMessage={handleCopyMessage} messageCopied={messageCopied} />} title={<div><h1>Finalizar compra</h1></div>}>
        <button className="w-full bg-white font-semibold text-black rounded flex justify-center items-center py-3 px-4 gap-2 transition hover:opacity-80">
          {buttonMessage ?? 'Donar'}
        </button>
      </CustomDialog>
      </CardFooter>
    </Card>
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
          <div></div>
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