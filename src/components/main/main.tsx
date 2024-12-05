import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

export default function Suscriptions () {
  const silverDesc = [
    { desc: <p><span className="font-semibold text-white">150</span> puntos cada <span className="font-semibold text-white">10</span></p> },
    { desc: <p><span className="font-semibold text-white">10k</span> puntos</p> },
    { desc: <p><span className="font-semibold text-white">2</span> dinos a elección <span className="font-semibold text-white">55</span> puntos</p> },
    { desc: <p>Comando para pintar dinos</p> }
  ]
  const goldDesc = [
    { desc: <p><span className="font-semibold text-white">250</span> puntos cada <span className="font-semibold text-white">10</span></p> },
    { desc: <p><span className="font-semibold text-white">25k</span> puntos</p> },
    { desc: <p><span className="font-semibold text-white">4</span> dinos a elección <span className="font-semibold text-white">55</span> puntos</p> },
    { desc: <p>Comando para pintar dinos</p> }
  ]
  const platinumDesc = [
    { desc: <p><span className="font-semibold text-white">500</span> puntos cada <span className="font-semibold text-white">10</span></p> },
    { desc: <p><span className="font-semibold text-white">50k</span> puntos</p> },
    { desc: <p><span className="font-semibold text-white">8</span> dinos a elección <span className="font-semibold text-white">55</span> puntos</p> },
    { desc: <p>Comando para pintar dinos</p> }
  ]
  return (
    <section className="flex flex-col justify-center items-center gap-12">
      <div className="w-full grid grid-cols-3 gap-6">
        <BillingCard 
          title="Silver"
          titleClassName='text-gray-400'
          description={silverDesc}
          price="5"
        />
        <BillingCard 
          title="Gold"
          titleClassName='text-yellow-400'
          description={goldDesc}
          price="15"
        />
        <BillingCard 
          title="Platinum"
          titleClassName='text-blue-400'
          description={platinumDesc}
          price="30"
        />
      </div>
    </section>
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