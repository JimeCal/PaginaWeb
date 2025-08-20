import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

export default function Footer() {
    return (
        <footer className="bg-[#92B0C9] text-gray-900 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start">

                <div className="mb-8 md:mb-0">
                    <p className="font-bold">Dr Juan Diego López</p>
                    <p className="mt-2">
                        Especialista en ortopedia y traumatología general y<br />
                        cirugía de mano y miembro superior
                    </p>
                </div>

                <div className="mb-8 md:mb-0 flex flex-col items-start space-y-2">
                    <a href="#inicio" className="font-bold hover:underline">Inicio</a>
                    <a href="#agendar" className="font-bold hover:underline">Cómo agendar</a>
                    <a href="#contacto" className="font-bold hover:underline">Contacto</a>
                </div>

                <div className="flex flex-col items-start space-y-2">
                    <span className="font-bold">Clínicas</span>
                    <a href="#sanpablo" className="hover:underline">Plaza Médica San Pablo</a>
                    <a href="#biblica" className="hover:underline">Clínica Bíblica</a>
                </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex items-center justify-center space-x-6 mt-8 mb-2">
                <a href="#" aria-label="Whatsapp" className="text-[#001C36] hover:scale-110 transition">
                    <WhatsApp fontSize="large" />
                </a>
                <a href="#" aria-label="Facebook" className="text-[#001C36] hover:scale-110 transition">
                    <Facebook fontSize="large" />
                </a>
                <a href="#" aria-label="Instagram" className="text-[#001C36] hover:scale-110 transition">
                    <Instagram fontSize="large" />
                </a>
            </div>

            <p className="text-center text-xs mt-2">
                © 2025. Todos los derechos reservados
            </p>
        </footer>
    );
}
