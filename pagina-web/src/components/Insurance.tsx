const logos = [
  { src: "/logos/assa.png", width: 148, height: 112 },
  { src: "/logos/adisa.png", width: 152, height: 92 },
  { src: "/logos/panamerican.png", width: 151, height: 56 },
  { src: "/logos/redbridge.png", width: 152, height: 112 },
  { src: "/logos/ins.png", width: 151, height: 112 },
  { src: "/logos/bmi.png", width: 116, height: 72 },
];

export default function Insurance() {
  return (
    <section className="px-8 md:px-20 py-16 bg-white">
      <h2 className="text-center text-[36px] font-bold text-blue-900 mb-4">Seguros</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 mb-4">
        {logos.map(({ src, width, height }, idx) => (
          <img
            key={idx}
            src={src}
            alt="logo"
            width={width}
            height={height}
            className="object-contain"
          />
        ))}
      </div>
      <p className="text-center text-gray-600 text-[20px]">Aceptamos seguros internacionales</p>
    </section>
  );
}
