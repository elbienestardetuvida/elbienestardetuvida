import Image from 'next/image'

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl p-8">
            <Image
              src="/images/storefront.png"
              alt="Frente del local El Bienestar de tu Vida"
              width={500}
              height={400}
              className="rounded-2xl w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Más que un negocio, somos familia
            </h2>
            <p className="text-xl text-green-100 mb-6">
              Desde nuestro local en San José de la Dormida, trabajamos día a día para ofrecerte 
              los mejores productos frescos. Creemos que una buena alimentación es la base del bienestar.
            </p>
            <p className="text-lg text-green-100 mb-8">
              Nuestro compromiso va más allá de la venta: queremos ser parte de tu camino hacia 
              una vida más saludable, ofreciéndote no solo productos de calidad, sino también 
              consejos y recetas para aprovecharlos al máximo.
            </p>
            
            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Lo que nos distingue:</h3>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Productos seleccionados diariamente
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Atención personalizada y familiar
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Precios justos y ofertas semanales
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Compromiso con la comunidad local
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
