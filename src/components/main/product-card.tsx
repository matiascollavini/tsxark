'use client'

import { Products } from "@/utils/types";
import Image from "next/image";
import CustomDialog from "../ui/custom-dialog";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

export default function ProductCard ({ product } : { product: Products }) {
  return (
    <div onClick={() => console.log(product)} key={product.id} className="cursor-pointer group relative overflow-hidden rounded">
      <CustomDialog className="md:min-w-[800px]" content={<Content  product={product}/>} title={<div className="flex items-center gap-2"><h1>{product.title}</h1><Badge className="text-black">{product.categoryToShow}</Badge></div>}>
        <div className="aspect-square">
          <Image
            src={product.image.src}
            alt={`Foto de ${product.title}`}
            width={1000}
            height={1000}
            className="transition duration-300 object-contain p-8 group-hover:scale-105"
          />
          <div className="hidden group-hover:block absolute top-0 bottom-0 h-full w-full bg-black/20" />
          <div className="absolute flex w-full items-end justify-between bottom-3 px-3">
            <span className="text-xl font-geist-mono">{product.title}</span>
            <span className="text-3xl font-geist-mono font-bold bg-gradient-to-r from-violet-500 to-white bg-clip-text text-transparent">${product.price}</span>
          </div>
        </div>
      </CustomDialog>
    </div>
  )
}

function Content ({ product } : { product: Products }) {
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
        <Button className="w-full text-black sm:w-auto" size="lg">
          <ShoppingCart className="h-6 w-6" />
          Agregar al carrito
        </Button>
      </div>
    </div>
  )
}