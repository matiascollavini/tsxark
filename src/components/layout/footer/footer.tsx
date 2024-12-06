import Link from "next/link";

export default function Footer () {
  return (
    <section className="flex justify-center items-center gap-1 w-full text-sm p-4 border-t border-gray-700">
      © Copyright {new Date().getFullYear()} - Desarrollado por <Link target="_blank" href='https://github.com/matiascollavini' className="transition text-blue-500 hover:text-blue-600"> Matias Collavini</Link>. Todos los derechos reservados.
    </section>
  )
}