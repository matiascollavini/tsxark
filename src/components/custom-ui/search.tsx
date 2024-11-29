'use client'

import { Input } from "@/components/ui/input"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

export default function SearchInput ({ name, placeholder } : { name: string, placeholder?: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set(name, term)
    } else {
      params.delete(name)
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, 300)
  return (
    <Input
      name={name}
      placeholder={placeholder ?? 'Buscar...'}
      defaultValue={searchParams.get(name)?.toString()}
      onChange={(e) => {
        handleSearch(e.target.value)
      }}
    />
  )
}