import Image from "next/image";
import Link from "next/link";
import FAQS_CLIENT from "./constants/faqs-client";
import Card from "./components/card/card";
import FAQItem from "./components/accordion-item/accordion-item";
import ADVANTAGES from "./constants/advantages";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
   <div className="relative min-h-[250px] md:min-h-[400px] lg:min-h-[600px]"> {/* Ajusta las alturas aquí */}
        <Image
          src="https://storage.googleapis.com/gutenfy-web-dev/establecimientos/enterprises%20(1).webp"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
          alt="Fondo del encabezado"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center md:justify-between pt-20 relative">
          {/* Logo de la empresa en la esquina superior izquierda */}
          <img
            src="https://storage.googleapis.com/gutenfy-web-dev/logos/logo-gutenfy.svg"
            alt="gutenfy-logo"
            className="absolute top-0 left-0 m-4 h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 z-10"
          />
          {/* Columna de texto */}
          <div className="text-white z-10 mb-8 md:mb-0 md:w-1/2 lg:w-3/5 xl:w-1/2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-5">
              Imprimir es cosa de dos.
            </h1>
            <p>Detrás de cada buena impresión hay una buena copistería.</p>
          </div>
          {/* Columna del formulario */}
          <div className="z-10 sm:py-10 md:p-10 w-full xl:w-1/3 flex justify-center items-center"> {/* Ajusta el posicionamiento y tamaño si es necesario */}
            <iframe
              width="100%"
              height="770"
              src="https://ce493616.sibforms.com/serve/MUIFAGO5wdoHnVMh5ICN3KPHx1lwUIRDANKR5qQ0q3UA46B3kEWk6v-RwFP1k1ZYmmKY762Ajx9CiyDteQG-a8OOR2mFeJO8jN6EycaAF9ZlINZIa9B_i8vW0E1AyUA9ynAizSCV5DQa6Xyv-i9DxVWScYYCzViRT9iv8uQ41rwRN3RmsAmAWPTCHAWDHwgMAfzZj7RkzHAEmZDM"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-semibold mb-6 py-8">
            Ventajas de usar Gutenfy
          </h2>
          <div className="flex flex-wrap justify-center -mx-2">
            {ADVANTAGES.map((advantage, index) => (
              <div
                className="px-2 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                key={index}
              >
                <div className="flex justify-center">
                  <Card
                    title={advantage.title}
                    description={advantage.description}
                    imageUrl={advantage.imageUrl}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center py-8">¿Dudas?</h2>
          <div className="space-y-4">
            {FAQS_CLIENT.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={"mailto:contacto@gutenfy.com?subject=Contactar"}
              className="mb-2 hover:underline"
            >
              ¿Tienes más dudas? Contactar
            </Link>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-center w-full bg-[#016760] py-3 mt-auto">
        <div>
          <p className="text-white text-base font-normal">Gutenfy © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
