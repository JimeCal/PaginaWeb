"use client";

import LanguageIcon from "@mui/icons-material/Language";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#b3cde0]">
      {/* Logo / Nombre */}
      <h1 className="font-semibold text-lg">Dr Juan Diego López</h1>

      {/* Menú */}
      <nav className="flex items-center space-x-8">
        <a href="#" className="hover:underline">Inicio</a>
        <a href="#" className="hover:underline">Clínicas</a>
        <a href="#" className="hover:underline">Como agendar</a>
        <a
          href="#"
          className="px-4 py-2 rounded-full bg-blue-900 text-white font-semibold"
        >
          Contacto
        </a>
      </nav>

      {/* Idioma */}
      <div className="flex items-center space-x-2">
        <LanguageIcon fontSize="small" />
        <select className="bg-transparent text-sm">
          <option>Español</option>
          <option>English</option>
        </select>
      </div>
    </header>
  );
}
