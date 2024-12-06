import Suscriptions from "@/components/main/suscriptions";

export type SuscriptionsTypes = {
  title: string;
  titleToCopy: string;
  price: number;
  color?: string;
  buttonMessage?: string;
  description: { desc: React.ReactElement }[]
}

export default function Page () {
  const suscriptions = [
    {
      title: 'Silver',
      titleToCopy: 'la suscripción *Silver*',
      price: 5,
      color: 'gray',
      buttonMessage: 'Suscribirse',
      description: [
      { desc: <p><span className="font-semibold text-white">150</span> puntos cada <span className="font-semibold text-white">10</span></p> },
      { desc: <p><span className="font-semibold text-white">10k</span> puntos</p> },
      { desc: <p><span className="font-semibold text-white">2</span> dinos a elección <span className="font-semibold text-white">55</span> puntos</p> },
      { desc: <p>Comando para pintar dinos</p> }
    ]},
    {
      title: 'Gold',
      titleToCopy: 'la suscripción *Gold*',
      price: 15,
      color: 'yellow',
      buttonMessage: 'Suscribirse',
      description: [
      { desc: <p><span className="font-semibold text-white">250</span> puntos cada <span className="font-semibold text-white">10</span></p> },
      { desc: <p><span className="font-semibold text-white">25k</span> puntos</p> },
      { desc: <p><span className="font-semibold text-white">4</span> dinos a elección <span className="font-semibold text-white">55</span> puntos</p> },
      { desc: <p>Comando para pintar dinos</p> }
    ]},
    { 
      title: 'Platinum',
      titleToCopy: 'la suscripción *Platinum*',
      price: 30,
      color: 'blue',
      buttonMessage: 'Suscribirse',
      description: [
      { desc: <p><span className="font-semibold text-white">500</span> puntos cada <span className="font-semibold text-white">10</span></p> },
      { desc: <p><span className="font-semibold text-white">50k</span> puntos</p> },
      { desc: <p><span className="font-semibold text-white">8</span> dinos a elección <span className="font-semibold text-white">55</span> puntos</p> },
      { desc: <p>Comando para pintar dinos</p> }
      ]
    }
  ]

  const buys = [
    {
      title: 'All bosses',
      titleToCopy: 'el paquete *All bosses*',
      price: 10,
      buttonMessage: 'Comprar',
      description: [
        { desc: <p>(Se entrega a partir del <span className="text-white font-semibold">7mo</span> día de wipe)</p> } 
      ]
    },
    {
      title: 'All ascensiones + Notas the island / Fjordur',
      titleToCopy: 'el paquete *All ascensiones + Notas the island / Fjordur*',
      price: 20,
      buttonMessage: 'Comprar',
      description: [
        { desc: <p>(Se entrega a partir del <span className="text-white font-semibold">7mo</span> día de wipe)</p> } 
      ]
    }
  ]
  return (
    <section className="max-w-screen-xl mt-32 min-h-screen mx-auto px-10 md:px-0 my-20">
      <div className="flex flex-col justify-start items-center w-full border-b pb-12 border-white">
        <h1 className="mb-12 text-3xl font-semibold">Suscripciones</h1>
        <Suscriptions suscriptions={suscriptions} />
      </div>
      <div className="flex flex-col justify-start items-center w-full pt-12">
        <h1 className="mb-12 text-3xl font-semibold">Compras</h1>
        <Suscriptions suscriptions={buys} />
      </div>
    </section>
  )
}