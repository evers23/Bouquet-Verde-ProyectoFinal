import { Card } from "../components/ui";

export const AboutPage = () => {
  return (
    <>
      <div className="mt-6">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-3 text-center">¿Qué es Bouquet Verde?</h1>
          <p className="text-lg text-justify leading-relaxed text-gray-700 px-6">
           En la actualidad, un <strong>Bouquet Verde</strong> es un arreglo floral que se distingue por el uso predominante de follaje y plantas en tonos verdes, a menudo complementado con flores de colores suaves. Este tipo de bouquet transmite frescura y elegancia, siendo ideal para decoraciones modernas y minimalistas.  
           En <strong>Bouquet Verde</strong>, ofrecemos una amplia variedad de opciones perfectas para eventos como bodas, cenas y celebraciones, todo ello a un costo accesible.
          </p>

        </Card>
      </div>

      <div className="mt-6">
        <Card className="p-6">
        <h1 className="text-3xl font-bold mb-4 mt-6 text-center text-sky-600">
  ¿Buscas flores a domicilio?
</h1>
<p className="text-lg text-justify leading-relaxed text-gray-700 px-6">
  En <strong>Bouquet Verde</strong>, te ofrecemos una amplia selección de arreglos florales, diseñados con esmero para cada ocasión. Contamos con flores de alta calidad, como rosas, girasoles, liliums, tulipanes y más, disponibles en diversas presentaciones, desde ramos y canastillos hasta elegantes floreros. Cada uno de nuestros diseños está pensado para sorprender y emocionar a quien los reciba, añadiendo un toque único a tu mensaje.
</p>
<p className="text-lg text-justify leading-relaxed text-gray-700 px-6">
  Además, realizamos envíos de flores a domicilio en todas las comunas de Santiago, garantizando frescura y entregas puntuales.  
  <br />  
  <strong>¡Haz tu pedido hoy y deja que las flores hablen por ti!</strong>
</p>

<h1 className="text-3xl font-bold my-6 text-center text-sky-600">
  ¿Cómo funciona el servicio de flores a domicilio?
</h1>
<p className="text-lg text-justify leading-relaxed text-gray-700 px-6">
  Nuestro servicio de flores a domicilio está disponible en todas las comunas de Santiago. Realizamos entregas de lunes a sábado en dos bloques horarios:
</p>
<ul className="list-disc pl-10 mb-6 text-lg text-gray-800">
  <li><strong>Horario 1:</strong> 09:00 a 13:00 hrs</li>
  <li><strong>Horario 2:</strong> 13:00 a 17:00 hrs</li>
</ul>

<h1 className="text-3xl font-bold my-6 text-center text-sky-600">
  ¿Cómo realizar un pedido?
</h1>
<p className="text-lg text-justify leading-relaxed text-gray-700 px-6">
  Hacer un pedido en <strong>Bouquet Verde</strong> es muy fácil. Primero, elige el arreglo floral que más te guste y agrégalo al carrito. Luego, podrás escribir un mensaje personalizado para la tarjeta de dedicatoria y añadir acompañamientos como globos, chocolates o peluches.
</p>
<p className="text-lg text-justify leading-relaxed text-gray-700 px-6">
  Cuando tengas todo listo, procede a finalizar tu compra completando los datos necesarios para garantizar una entrega correcta. Después, serás dirigido a nuestra pasarela de pago, y tu pedido quedará programado para la fecha y hora seleccionada.
</p>
<p className="text-lg text-justify leading-relaxed text-gray-700 px-6">
  Si prefieres un proceso más rápido, también puedes hacer tu pedido vía <strong>WhatsApp</strong>. Envíanos una foto del arreglo que te gustaría y uno de nuestros asesores estará encantado de ayudarte.
</p>
        </Card>
      </div>
    </>
  );
};

