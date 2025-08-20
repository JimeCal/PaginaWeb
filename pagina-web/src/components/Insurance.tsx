const logos = [
  "/logos/assa.png",
  "/logos/adisa.png",
  "/logos/panamerican.png",
  "/logos/redbridge.png",
  "/logos/ins.png",
  "/logos/bmi.png",
];

export default function Insurance() {
  return (
    <section className="px-8 md:px-20 py-16 bg-white">
      <h2 className="text-3xl font-bold text-blue-900 mb-10">Seguros</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo} alt="logo" className="h-12 object-contain" />
        ))}
      </div>
      <p className="text-center mt-6 text-gray-600">Aceptamos seguros internacionales</p>
    </section>
  );
}
