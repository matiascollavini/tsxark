import Image from "next/image";

export default function Footer () {
  return (
    <section className="flex justify-end w-full p-4 border-t border-gray-700">
      <Image src='/ark-logo-2.png' alt="ARK Logo" width={100} height={100} />
    </section>
  )
}