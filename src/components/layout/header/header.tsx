import Image from "next/image";

export default function Header () {
  return (
    <section className="fixed w-full p-4 border-gray-700">
      <div className="w-full flex justify-between items-center">
        <Image src='/ark-logo-2.png' alt="ARK Logo" width={100} height={100} />
        <h1 className="text-6xl font-semibold">TSX</h1>
        <div className="w-[100px]" />
      </div>
    </section>
  )
}