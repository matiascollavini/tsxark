import { Products } from "@/utils/types";
import SearchInput from "../custom-ui/search";
import json from "@/items.json"
import { normalizeString } from "@/utils/normalize-string";
import ProductCard from "./product-card";

export default function Shop ({ query, category } : { query: string, category: string }) {
  console.log('query', query)
  const products: Products[] = json.products
  const filteredByCategory = products?.filter((product: Products) => product?.category === category)
  const filteredBySearch = filteredByCategory?.filter((product: Products) => 
    normalizeString(product.title)?.includes(normalizeString(query))
  )
  return (
    <div className="flex flex-col min-h-screen w-full">
      <h1 className="py-8 text-4xl">
        <span className="font-bold bg-gradient-to-r capitalize from-violet-500 to-white bg-clip-text text-transparent">{category}</span>
      </h1>
      <div className="flex flex-col items-center gap-6">
        <SearchInput name="q" placeholder="Buscar producto..." />
        {filteredBySearch.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filteredBySearch.map((product: Products) => (
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
