import BiotechIcon from "@mui/icons-material/Biotech";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import DescriptionIcon from "@mui/icons-material/Description";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

import { iconSX, textClasses } from "../theme/styles";

const items = [
  {
    icon: <BiotechIcon sx={iconSX} />,
    text: "Médico asistente en medicina general CCSS. Área de salud Siquirres, Área de salud Alajuela sur.",
    years: "2000 a 2004",
  },
  {
    icon: <LocalHospitalIcon sx={iconSX} />,
    text: "Médico Ortopedista Hospital San Vicente de Paul, Heredia, Costa Rica.",
    years: "2009 a 2025",
  },
  {
    icon: <GroupsIcon sx={iconSX} />,
    text: "Miembro Asociación Costarricense de Ortopedia y Traumatología",
    years: "Desde el 2009",
  },
  {
    icon: <PersonAddAlt1Icon sx={iconSX} />,
    text: "Coordinador de clínica de miembro superior Hospital San Vicente de Paul.",
    years: "2011 a 2025",
  },
  {
    icon: <LocalPharmacyIcon sx={iconSX} />,
    text: "Instituto Nacional de Seguros. Médico ortopedista y cirujano de mano y miembro superior.",
    years: "2017 a 2023",
  },
  {
    icon: <DescriptionIcon sx={iconSX} />,
    text: "Miembro fundador, Asociación Costarricense de Cirugía de mano.",
    years: "2023",
  },
  {
    icon: <VolunteerActivismIcon sx={iconSX} />,
    text: "Médico asistente en ortopedia y traumatología general y cirugía de mano y miembro superior. Clínica Bíblica",
    years: "2024 hasta la actualidad",
  },
];

export default function Experience() {
  return (
    <section className="px-8 md:px-20 py-16 bg-[#b3cde0]">
      <h2 className="text-3xl font-bold text-dark-blue mb-10 text-center">Experiencia</h2>
      <div className="flex flex-wrap gap-6 justify-center mb-6">
        {items.slice(0, 4).map((item, idx) => (
          <div key={idx} className={textClasses.cardContainer}>
            <div className="mb-2.5">{item.icon}</div>
            <p className={`${textClasses.centerText} ${textClasses.primaryText}`}>{item.text}</p>
            <p className={`mt-4 ${textClasses.yearsText}`}>{item.years}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {items.slice(4, 7).map((item, idx) => (
          <div key={idx} className={textClasses.cardContainer}>
            <div className="mb-2.5">{item.icon}</div>
            <p className={`${textClasses.centerText} ${textClasses.primaryText}`}>{item.text}</p>
            <p className={`mt-4 ${textClasses.yearsText}`}>{item.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
