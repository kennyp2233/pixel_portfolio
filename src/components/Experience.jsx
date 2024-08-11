import React from 'react';
import ExperienceItem from './ExperienceItem';

const EXPERIENCIE = [
  {
    date: 'Enero 2022 - Actualidad',
    title: 'Desarrollo de ExpertGuide y Landing Page',
    client: 'Experts Handling Cargo',
    description: 'Nuestro equipo desarrolló ExpertGuide, un sistema full-stack innovador para la gestión de guías requeridas por SENAE en Ecuador. Este proyecto abarcó desde la arquitectura de la base de datos hasta una interfaz de usuario intuitiva, asegurando el cumplimiento de requisitos regulatorios y optimizando la eficiencia operativa en la exportación de productos. Además, diseñamos una landing page moderna que refleja las últimas tendencias en UI, marcando un hito en la presencia digital de nuestro cliente.',
  },
  {
    date: 'Marzo 2024',
    title: 'Sistema Integral para Gestión Hospitalaria',
    client: 'Hospital Metropolitano',
    description: 'Implementamos un sistema completo para la gestión hospitalaria, incluyendo módulos críticos como generación de formularios, manejo de pacientes, gestión de citas, horarios y servicios. Este proyecto demuestra nuestra capacidad para crear soluciones robustas y escalables en el sector salud, mejorando significativamente la eficiencia operativa de nuestro cliente.',
  },
  {
    date: 'Octubre 2023 - Noviembre 2023',
    title: 'Interfaz de Usuario para DAO Ethereum',
    client: 'Ethereum Ecuador',
    description: 'Nuestro equipo de frontend diseñó e implementó una interfaz de usuario avanzada para una organización autónoma descentralizada (DAO) operando en la blockchain de Ethereum en Ecuador. El proyecto implicó crear experiencias de usuario intuitivas que mejoraron la participación y optimizaron los procesos de gobernanza dentro del marco DAO, demostrando nuestra experiencia en tecnologías blockchain y desarrollo web moderno.',
  },
  {
    date: 'Mayo 2023 - Junio 2023',
    title: 'Sistema Automatizado de Reserva de Almuerzos',
    client: 'Kruger Corp',
    description: 'Desarrollamos un sistema innovador de reserva de almuerzos utilizando códigos QR para Kruger Corp, una reconocida empresa multinacional ecuatoriana. Este proyecto, ejecutado por nuestro talentoso equipo de desarrollo, logró optimizar significativamente el proceso de reserva de almuerzos, mejorando la eficiencia y la experiencia del usuario mediante el uso de tecnología de vanguardia en códigos QR.',
  },
];

function ExperienceList() {
  return (
    <ol className="relative mt-16">
      {EXPERIENCIE.map((experiencie, index) => (
        <li key={index} className="">
          <ExperienceItem {...experiencie} />
        </li>
      ))}
    </ol>
  );
}

export default ExperienceList;
