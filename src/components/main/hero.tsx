export default function Hero () {
  return (
    <section className="h-screen bg-cover bg-center w-full hero-background">
      <div className='w-full h-screen bg-black bg-opacity-70'>
        <div className='flex justify-center items-center h-full max-w-screen-xl mx-auto'>
          <div className='p-4 w-full relative lg:col-span-11'>
            <div className="flex flex-col justify-start items-start">
              <h1 className="text-white text-center uppercase lg:text-7xl font-bold">Bienvenidos a la tienda oficial de tsx.</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}