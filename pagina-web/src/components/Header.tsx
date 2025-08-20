"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#b3cde0]">
      <h1 className="font-bold text-lg text-[#001C36]">
        Dr Juan Diego López
      </h1>

      <nav className="flex items-center space-x-8 text-[#001C36] font-bold">
        <a href="#" className="hover:underline">
          Inicio
        </a>
        <a href="#" className="hover:underline">
          Clínicas
        </a>
        <a href="#" className="hover:underline">
          Como agendar
        </a>
        <a
          href="#"
          className="px-6 py-2 rounded-full bg-[#001C36] text-white font-semibold text-[16px] leading-none"
          style={{ borderRadius: "55px" }}
        >
          Contacto
        </a>
      </nav>

      <div className="flex items-center space-x-2">
        <select className="bg-transparent text-sm text-[#001C36] font-normal focus:outline-none focus:ring-0">
          <option>Español</option>
          <option>English</option>
        </select>
      </div>
    </header>
  );
}
