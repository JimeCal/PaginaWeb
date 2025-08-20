export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 bg-[#b3cde0]">
      {/* Texto */}
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
          Dr. Juan Diego <br /> López Vega
        </h2>
        <p className="mt-4 text-gray-800">
          Especialista en ortopedia y traumatología general y cirugía de mano y
          miembro superior. En este sitio, encontrarás información sobre mis
          servicios, mi equipo y cómo puedo ayudarte a alcanzar tus objetivos de
          salud. Estoy comprometido con brindarte una atención personalizada y
          de alta calidad. ¡Si deseas agendar una cita, no dudes en contactarme!
        </p>
        <button className="mt-6 px-6 py-2 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
          Introducción →
        </button>
      </div>

      {/* Imagen del Doctor */}
      <div className="mt-10 md:mt-0">
        <img
          src="/doctor.png"
          alt="Doctor"
          className="max-w-sm rounded-lg"
        />
      </div>
    </section>
  );
}
