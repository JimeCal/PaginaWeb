import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-0 md:px-4 py-12 bg-[#b3cde0] overflow-hidden">
      {/* Figuras geométricas de fondo */}
      <div
        className="absolute w-[67px] h-[67px] bg-[#7A9FC8] opacity-40 rounded-[20px]"
        style={{
          top: '19.5%',
          left: '16%',
          transform: 'rotate(25.23deg)'
        }}
      ></div>

      <div
        className="absolute w-[635px] h-[635px] bg-[#638CB4] opacity-40 rounded-[99px]"
        style={{
          top: '99%',
          left: '15%',
          transform: 'rotate(56.47deg)'
        }}
      ></div>

      {/* Contenido principal centrado */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-full md:max-w-7xl mx-auto gap-10 md:gap-40">
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h2 className="font-albert-black font-black text-[60px] leading-tight text-[#001C36]">
            Dr. Juan Diego <br /> López Vega
          </h2>
          <p className="mt-4 text-[#001C36] font-albert-medium">
            Especialista en ortopedia y traumatología general y cirugía de mano y
            miembro superior. En este sitio, encontrarás información sobre mis
            servicios, mi equipo y cómo puedo ayudarte a alcanzar tus objetivos de
            salud. Estoy comprometido con brindarte una atención personalizada y
            de alta calidad. ¡Si deseas agendar una cita, no dudes en contactarme!
          </p>
          <button className="mt-6 flex items-center gap-2 px-6 py-2 border-2 border-[#003459] text-[#003459] rounded-full hover:bg-[#003459] hover:text-white transition font-albert-medium">
            Introducción
            <PlayCircleOutlineIcon className="text-xl" />
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
          <img
            src="/doctor.png"
            alt="Doctor"
            className="max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
