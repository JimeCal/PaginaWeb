import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { footerStyles } from "../theme/styles";

export default function Footer() {
  return (
    <footer className={footerStyles.container}>
      <div className={footerStyles.wrapper}>
        <div className={footerStyles.textLeft}>
          <p className="font-bold">Dr Juan Diego López</p>
          <p className="mt-2 leading-relaxed">
            Especialista en ortopedia y traumatología general y<br />
            cirugía de mano y miembro superior
          </p>
        </div>

        <div className={footerStyles.menu}>
          <a href="#inicio" className={footerStyles.link}>Inicio</a>
          <a href="#contacto" className={footerStyles.link}>Contacto</a>
        </div>

        <div className={footerStyles.menu.replace("space-y-2", "space-y-2")}>
          <span className="font-bold">Clínicas</span>
          <a href="#sanpablo" className={footerStyles.normalLink}>Plaza Médica San Pablo</a>
          <a href="#biblica" className={footerStyles.normalLink}>Clínica Bíblica</a>
        </div>
      </div>

      <div className={footerStyles.socialContainer}>
        <a href="#" aria-label="Whatsapp" className={footerStyles.iconColor + " hover:scale-110 transition"}>
          <WhatsApp sx={{ fontSize: 30 }} />
        </a>
        <a href="#" aria-label="Facebook" className={footerStyles.iconColor + " hover:scale-110 transition"}>
          <Facebook sx={{ fontSize: 30 }} />
        </a>
        <a href="#" aria-label="Instagram" className={footerStyles.iconColor + " hover:scale-110 transition"}>
          <Instagram sx={{ fontSize: 30 }} />
        </a>
      </div>

      <p className={footerStyles.copyrightText}>
        © 2025. Todos los derechos reservados
      </p>
    </footer>
  );
}
