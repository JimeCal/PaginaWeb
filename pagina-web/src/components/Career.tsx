export default function Career() {
  return (
    <section className="relative bg-white min-h-[700px] px-4 md:px-0 py-16 flex flex-col items-center">
      {/* Título Carrera arriba y centrado */}
      <h2
        className="mb-12 text-center"
        style={{
          fontWeight: 900, // Black
          fontSize: "52px",
          color: "#0F314E", // darkest azul
        }}
      >
        Carrera
      </h2>

      <div className="max-w-6xl w-full flex flex-col md:flex-row md:items-center md:gap-12">
        {/* Columna Imagen + badge */}
        <div className="relative flex flex-col items-center flex-1 min-w-[300px] mb-10 md:mb-0">
          {/* Cuadro experiencia */}
          <div
            className="absolute left-0 top-0 flex flex-col justify-center shadow-lg"
            style={{
              width: "178px",
              height: "144px",
              borderRadius: "30px",
              backgroundColor: "#0F314E",
              padding: "18px",
              zIndex: 30,
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "36px",
                color: "#fff",
                lineHeight: "1",
                marginBottom: "0.25em",
                textAlign: "left",
              }}
            >
              25
            </span>
            <span
              style={{
                fontWeight: 500,
                fontSize: "24px",
                color: "#fff",
                lineHeight: "1.2",
                textAlign: "left",
                whiteSpace: "pre-line",
              }}
            >
              {"años de\nexperiencia"}
            </span>
          </div>
          {/* Fondo celeste detrás de la imagen rotado hacia el lado opuesto */}
          <div
            style={{
              width: "558.24px",
              height: "599.76px",
              borderRadius: "100px",
              backgroundColor: "#92B0C9",
              position: "relative",
              zIndex: 10,
              transform: "rotate(10deg)",
              marginRight: "-40px",
            }}
          ></div>
          {/* Imagen del doctor centrada en el fondo */}
          <img
            src="/doctor2.png"
            alt="Doctor"
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              width: "460px",
              height: "620px",
              objectFit: "cover",
              borderRadius: "12px",
              zIndex: 20,
              boxShadow: "none",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
        {/* Columna Timeline */}
        <div className="flex-1 max-w-xl ml-0 md:ml-10 mt-12 md:mt-0">
          <div className="flex flex-col gap-7 mt-2">
            {[
              {
                date: "2004 a 2009",
                description:
                  "Universidad de Costa Rica. Post grado en Ortopedia y Traumatología general",
              },
              {
                date: "Marzo 2014",
                description:
                  "Clínica MAZ, Zaragoza, España. Curso teórico práctico de microcirugía y cirugía de mano.",
              },
              {
                date: "Setiembre 2010 a agosto 2011",
                description:
                  "Universidad de Barcelona (España). Subespecialidad en cirugía de mano y miembro superior.",
              },
              {
                date: "1996 a 2000",
                description:
                  "Escuela Autónoma de Ciencias Médicas de Centro América. Doctor en Medicina y Cirugía.",
              },
              {
                date: "Mayo 2019",
                description:
                  "Centro Latinoamericano de Investigación y Entrenamiento en Cirugía de Mínima Invasión. Bogotá, Colombia. Entrenamiento en cirugía artroscópica de muñeca.",
              },
            ].map(({ date, description }, i) => (
              <div key={i}>
                <span
                  style={{
                    display: "inline-block",
                    borderRadius: "57px",
                    border: "2px solid #0F314E",
                    fontWeight: "bold",
                    fontSize: "24px",
                    color: "#0F314E",
                    padding: "8px 20px",
                    marginBottom: "6px",
                  }}
                >
                  {date}
                </span>
                <p
                  style={{
                    fontWeight: 600, // semibold
                    fontSize: "22px",
                    color: "#153760", // algo más oscuro que el texto normal
                    marginTop: 0,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
