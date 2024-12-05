import Image from 'next/image'

export default function Logo ({ className } : { className: string }) {
  return (
    <Image className={className} width={200} height={200} alt='TSX ARK logo' src='/tsxark-logo.webp' />
  )
}
