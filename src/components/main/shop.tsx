import { Products } from "@/utils/types";
import SearchInput from "../custom-ui/search";
import CheckboxFilter from "../ui/custom-checkbox";
import json from "@/items.json"
import { normalizeString } from "@/utils/normalize-string";
import ProductCard from "./product-card";

export default function Shop ({ query } : { query: string }) {
  const products: Products[] = json.products
  const filteredProducts = products.filter((product: Products) => 
    normalizeString(product.title).includes(normalizeString(query))
  )
  return (
    <div className="flex flex-col gap-6 min-h-screen">
      <SearchInput name="q" placeholder="Buscar producto..." />
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 border-r pr-4">
          <h1 className="mb-4 font-medium">Filtrar por categoria</h1>
          <FilterCard />
        </div>
        {filteredProducts.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 col-span-3">
            {filteredProducts.map((product: Products) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        : 
          <div className="flex col-span-3 justify-center items-center">
            <span>No hay productos disponibles...</span>
          </div>
        }
      </div>
    </div>
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