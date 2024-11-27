'use client'

import { Products } from "@/utils/types";
import Image from "next/image";
import CustomDialog from "../ui/custom-dialog";
import Link from "next/link";
import { Discord } from "../ui/icons";
import discordLink from "@/utils/discord-link";

export default function ProductCard ({ product } : { product: Products }) {
  return (
    <div onClick={() => console.log(product)} key={product.id} className="cursor-pointer group relative overflow-hidden rounded">
      <CustomDialog className="min-w-[800px]" content={<Content  product={product}/>} title={product.title}>
        <div>
          <Image
            src={product.image.src}
            alt={`Foto de ${product.title}`}
            width={1000}
            height={1000}
            className="transition duration-300 aspect-square object-cover w-[200px] group-hover:scale-105"
          />
          <div className="hidden group-hover:block absolute top-0 bottom-0 h-full w-full bg-black/20" />
          <div className="absolute bottom-3 left-3">
            <span className="text-xl font-geist-mono">{product.title}</span>
          </div>
        </div>
      </CustomDialog>
    </div>
  )
}

function Content ({ product } : { product: Products }) {
  return (
    <div className="grid grid-cols-2 gap-6 justify-center items-center">
      <Image
        src={product.image.src}
        alt={`Foto de ${product.title}`}
        width={300}
        height={300}
        className="rounded-lg transition duration-300 aspect-square w-full object-cover group-hover:scale-105"
      />
      <div className="flex h-full flex-col justify-between">
        <p>{product.description}</p>
        <Link 
          href={discordLink()}
          target="_blank"
          className="p-2 flex justify-center items-center gap-3 rounded transition bg-blue-500 hover:opacity-85"
        >
         <Discord className="h-6 w-6 fill-white" /> <span>Realizar compra</span>
        </Link>
      </div>
    </div>
  )
}