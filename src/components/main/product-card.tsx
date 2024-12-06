'use client'

import { Products } from "@/utils/types";
import Image from "next/image";
import CustomDialog from "../ui/custom-dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Check, Loader, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

export default function ProductCard ({ product } : { product: Products }) {
  return (
    <div key={product.id} className="cursor-pointer group relative overflow-hidden rounded">
      <CustomDialog className="md:min-w-[800px]" content={<Content  product={product}/>} title={<div className="flex items-center gap-2"><h1>{product.title}</h1><Badge className="text-black">{product.categoryToShow}</Badge></div>}>
        <div className="aspect-square">
          <Image
            src={product.image.src}
            alt={`Foto de ${product.title}`}
            width={1000}
            height={1000}
            className="transition duration-300 object-contain p-8 group-hover:scale-105"
          />
          {product?.quantity && product?.quantity > 0 && <div className="absolute top-2 right-2"><span className="text-2xl">x{product?.quantity}</span></div>}
          <div className="hidden group-hover:block absolute top-0 bottom-0 h-full w-full bg-black/20" />
          <div className="absolute flex w-full items-end justify-between bottom-3 px-3">
            <span className="text-xl font-geist-mono font-bold bg-gradient-to-r from-violet-500 to-white bg-clip-text text-transparent">{product.title}</span>
            <span className="text-3xl font-geist-mono font-bold bg-gradient-to-r from-violet-500 to-white bg-clip-text text-transparent">${product.price}</span>
          </div>
        </div>
      </CustomDialog>
    </div>
  )
}

function Content ({ product } : { product: Products }) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<{ message?: string, status?: 'ok' | 'error' }>({})
  const addToCart = () => {
    setIsLoading(true)
    // Obtener el carrito anterior del localStorage, si no existe, crear uno vacío
    const previousStorage = JSON.parse(localStorage.getItem('cart') || JSON.stringify([]))

    // Buscar si el producto ya está en el carrito
    const existingItemIndex = previousStorage.findIndex((cartItem: Products) => cartItem.id === product.id)

    if (existingItemIndex >= 0) {
      setMessage({ message: 'Ya tienes este producto en el carrito', status: 'error' })
      setIsLoading(false)
    } else {
      const newItem = { ...product }
      previousStorage.push(newItem)
      // Actualizar el carrito en el localStorage
      localStorage.setItem('cart', JSON.stringify(previousStorage))
      setTimeout(() => {
        setIsLoading(false)
        setMessage({ message: 'Tu producto ha sido añadido al carrito', status: 'ok' })
      }, 1000)
      setTimeout(() => {
        setMessage({})
      }, 5000) 
    }
  }
  return (
    <div>
      <div className="space-y-1">
        <p className="text-base">
          {product.description}
        </p>
      </div>
      <div className="p-0">
        <div className="relative aspect-[16/9] bg-gradient-to-b from-transparent to-black/10">
          <Image
            src={product.image.src}
            alt={`Foto de ${product.title}`}
            fill
            className="object-contain p-8"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold">${product.price}</span>
          <span className="text-sm text-muted-foreground">USD</span>
        </div>
        <Button onClick={addToCart} className={`w-full text-black sm:w-auto ${isLoading ? 'opacity-30' : ''}`} size="lg">
          {message.status ? message.status === 'ok' ? <Check className="h-6 w-6" /> : message.status === 'error' && <X className="h-6 w-6" /> : isLoading ? <Loader className="h-6 w-6 animate-spin" /> : <ShoppingCart className="h-6 w-6" />}
          {message.message ?? 'Agregar al carrito'}
        </Button>
      </div>
    </div>
  )
}