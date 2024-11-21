import json from "@/items.json"
import { Products } from "@/utils/types"
import ProductCard from "@/components/main/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import CheckboxFilter from "../ui/custom-checkbox"

export default function Shop () {
  const products: Products[] = json.products
  return (
    <section className="flex flex-col justify-center items-center gap-12">
      <Tabs defaultValue="shop">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="shop">Tienda</TabsTrigger>
          <TabsTrigger className="w-full" value="donate">Donaciones</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-12" value="shop">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-1 border-r pr-4">
              <h1 className="mb-4 font-medium">Filtrar por categoria</h1>
              <FilterCard />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-3">
              {products.map((product: Products) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent className="mt-12" value="donate">
          <div className="w-full grid grid-cols-3 gap-6">
            <BillingCard 
              title="Silver"
              titleClassName='text-gray-400'
              description={[{ desc: <p><span className="font-semibold text-white">150</span> puntos cada <span className="font-semibold text-white">10k</span> puntos</p> }, { desc: <p><span className="font-semibold text-white">2</span> dino elección <span className="font-semibold text-white">55</span> puntos</p> }, { desc: <p>Comando para pintar dinos</p> }]}
              price="5"
            />
            <BillingCard 
              title="Gold"
              titleClassName='text-yellow-400'
              description={[{ desc: <p><span className="font-semibold text-white">500</span> puntos cada <span className="font-semibold text-white">10k</span> puntos</p> }, { desc: <p><span className="font-semibold text-white">2</span> dino elección <span className="font-semibold text-white">55</span> puntos</p> }, { desc: <p>Comando para pintar dinos</p> }]}
              price="15"
            />
            <BillingCard 
              title="Platinum"
              titleClassName='text-blue-400'
              description={[{ desc: <p><span className="font-semibold text-white">150</span> puntos cada <span className="font-semibold text-white">10k</span> puntos</p> }, { desc: <p><span className="font-semibold text-white">2</span> dino elección <span className="font-semibold text-white">55</span> puntos</p> }, { desc: <p>Comando para pintar dinos</p> }]}
              price="30"
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}



function FilterCard () {
  return (
    <div className="flex flex-col justify-center items-start gap-3">
      <div className="flex w-full items-center justify-between">
        <CheckboxFilter id="dinos" text="Dinosaurios" />
        <span className="text-xs">13</span>
      </div>
      <div className="flex w-full items-center justify-between">
        <CheckboxFilter id="weapons" text="Armas" />
        <span className="text-xs">8</span>
      </div>
      <div className="flex w-full items-center justify-between">
        <CheckboxFilter id="structures" text="Estructuras" />
        <span className="text-xs">3</span>
      </div>
      <div className="flex w-full items-center justify-between">
        <CheckboxFilter id="others" text="Otros" />
        <span className="text-xs">4</span>
      </div>
    </div>
  )
}

function BillingCard ({ title, description, price, titleClassName } : { title: string, description: { desc: React.ReactElement }[], price: string, titleClassName?: string }) {
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
        <span className="text-5xl font-bold">${price}</span><span className="text-xs">/usd</span>
      </CardContent>
      <CardFooter>
      <button className="w-full bg-white text-black rounded flex justify-center items-center py-3 px-4 gap-2 transition hover:opacity-80">
        Donar
      </button>
      </CardFooter>
    </Card>
  )
}