import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLink, BiLogoReact } from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import { DiNodejs } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiPrime } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { BiServer } from 'react-icons/bi';
import { SiSequelize } from 'react-icons/si';
import LinkButton from './LinkButton';

// Define the TAGS object
const TAGS = {
  REACT: {
    name: 'React',
    class: 'bg-[#61DAFB] text-black',
    icon: BiLogoReact,
  },
  NEXTJS: {
    name: 'Next.js',
    class: 'bg-black text-white',
    icon: RiNextjsFill,
  },
  NODE: {
    name: 'Node.js',
    class: 'bg-[#339933] text-white',
    icon: DiNodejs,
  },
  EXPRESS: {
    name: 'Express',
    class: 'bg-[#000000] text-white',
    icon: SiExpress,
  },
  SEQUELIZE: {
    name: 'Sequelize',
    class: 'bg-[#52B0E7] text-white',
    icon: SiSequelize,
  },
  MYSQL: {
    name: 'MySQL',
    class: 'bg-[#4479A1] text-white',
    icon: SiMysql,
  },
  PRIMEFACES: {
    name: 'PrimeFaces',
    class: 'bg-[#35A4CF] text-white',
    icon: SiPrime,
  },
  JSPA: {
    name: 'JSPA',
    class: 'bg-[#F7DF1E] text-black',
    icon: DiJava,
  },
  WILDFLY: {
    name: 'WildFly',
    class: 'bg-[#3366CC] text-white',
    icon: BiServer,
  },
};

// Define the PROJECTS array
const PROJECTS = [
  {
    title: 'ExpertGuide y Landing Page',
    description:
      'Sistema full-stack para la gestión de guías requeridas por SENAE en Ecuador. Incluye una landing page moderna que refleja las últimas tendencias en UI. Optimiza la eficiencia operativa en la exportación de productos.',
    link: 'https://expertshandlingcargo.com',
    image: '/projects/template.webp',
    tags: [TAGS.REACT, TAGS.NEXTJS, TAGS.NODE, TAGS.EXPRESS, TAGS.SEQUELIZE, TAGS.MYSQL],
    date: 'Enero 2022 - Actualidad',
    client: 'Experts Handling Cargo',
  },
  {
    title: 'Sistema Integral de Gestión Hospitalaria',
    description:
      'Sistema completo para la gestión hospitalaria, incluyendo módulos para generación de formularios, manejo de pacientes, gestión de citas, horarios y servicios. Mejora significativamente la eficiencia operativa del hospital.',
    link: 'https://hospitalmetropolitano.org',
    image: '/projects/template.webp',
    tags: [TAGS.PRIMEFACES, TAGS.JSPA, TAGS.MYSQL, TAGS.WILDFLY],
    date: 'Marzo 2024',
    client: 'Hospital Metropolitano',
  },
  {
    title: 'Interfaz de Usuario para DAO Ethereum',
    description:
      'Interfaz de usuario avanzada para una organización autónoma descentralizada (DAO) operando en la blockchain de Ethereum en Ecuador. Mejora la participación y optimiza los procesos de gobernanza.',
    link: 'https://ethereumecuador.org',
    image: '/projects/template.webp',
    tags: [TAGS.REACT, TAGS.NODE],
    date: 'Octubre 2023 - Noviembre 2023',
    client: 'Ethereum Ecuador',
  },
  {
    title: 'Sistema Automatizado de Reserva de Almuerzos',
    description:
      'Sistema innovador de reserva de almuerzos utilizando códigos QR. Optimiza significativamente el proceso de reserva, mejorando la eficiencia y la experiencia del usuario.',
    link: 'https://krugercorp.com',
    image: '/projects/template.webp',
    tags: [TAGS.REACT, TAGS.NODE],
    date: 'Mayo 2023 - Junio 2023',
    client: 'Kruger Corp',
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map(({ image, title, description, tags, link, github }) => (
        <article key={title} className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <img
                alt={title}
                className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                loading="lazy"
                src={image}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <div className="flex flex-wrap mt-2">
              <ul className="flex flex-row mb-2 gap-x-2">
                {tags.map((tag, index) => (
                  <li key={index}>
                    <span className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}>
                      <tag.icon className="size-4" />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-2 text-gray-700 dark:text-gray-400">{description}</div>
              <footer className="flex items-end justify-start mt-4 gap-x-4">
                {github && (
                  <LinkButton href={github}>
                    <BsGithub className="size-6" />
                    Code
                  </LinkButton>
                )}
                {link && (
                  <LinkButton href={link}>
                    <BiLink className="size-4" />
                    Preview
                  </LinkButton>
                )}
              </footer>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Projects;
