export default function Career() {
  return (
    <section className="px-8 md:px-20 py-16 bg-white">
      <h2 className="text-3xl font-bold text-blue-900 mb-10">Carrera</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div>
          <div className="bg-blue-900 text-white p-6 rounded-xl w-40 text-center mb-6">
            <p className="text-3xl font-bold">25</p>
            <p className="text-sm">años de experiencia</p>
          </div>
          <img src="/doctor2.png" alt="Doctor" className="rounded-lg" />
        </div>

        {/* Timeline */}
        <div className="space-y-6 text-blue-900">
          <div>
            <span className="bg-blue-100 px-4 py-1 rounded-full font-semibold">2004 a 2009</span>
            <p className="mt-2">Universidad de Costa Rica. Post grado en Ortopedia y Traumatología general</p>
          </div>
          <div>
            <span className="bg-blue-100 px-4 py-1 rounded-full font-semibold">Marzo 2014</span>
            <p className="mt-2">Clínica MAZ, Zaragoza, España. Curso teórico práctico de microcirugía y cirugía de mano.</p>
          </div>
          <div>
            <span className="bg-blue-100 px-4 py-1 rounded-full font-semibold">Setiembre 2010 a agosto 2011</span>
            <p className="mt-2">Universidad de Barcelona (España). Subespecialidad en cirugía de mano y miembro superior.</p>
          </div>
          <div>
            <span className="bg-blue-100 px-4 py-1 rounded-full font-semibold">1996 a 2000</span>
            <p className="mt-2">Escuela Autónoma de Ciencias Médicas de Centro América. Doctor en Medicina y Cirugía.</p>
          </div>
          <div>
            <span className="bg-blue-100 px-4 py-1 rounded-full font-semibold">Mayo 2019</span>
            <p className="mt-2">Centro Latinoamericano de Investigación y Entrenamiento en Cirugía de Mínima Invasión. Bogotá, Colombia. Entrenamiento en cirugía artroscópica de muñeca.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
