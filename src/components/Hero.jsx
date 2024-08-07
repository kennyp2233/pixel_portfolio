import React from 'react';
import Badge from "./Badge";
import SocialPill from "./SocialPill";
import { BsLinkedin, BsMailbox } from "react-icons/bs";
import ReactRotatingText from 'react-rotating-text';
import { ReactTyped as Typed } from 'react-typed';

function Hero() {
    return (
        <div className="max-w-xl">
            <div className="flex gap-4 mb-4">
                <img
                    className="rounded-full shadow-lg size-16"
                    src="/pixel-logo.webp"
                    alt={`Logo de piXel`}
                />
                <a
                    href="https://linkedin.com/company/pixel-ecuador"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center transition md:justify-center md:hover:scale-105"
                >
                    <Badge>
                        Innovación en Software
                    </Badge>
                </a>
            </div>
            <h1
                className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white"
            >
                piXel
            </h1>
            <p
                className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300"
            >
                Empresa líder en <strong>
                    <Typed
                        strings={[
                            'desarrollo de software profesional',
                            'creación de soluciones innovadoras',
                            'transformación digital auténtica'
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </strong> en Ecuador 🇪🇨.
            </p>
            <p className="mt-2 text-xl text-gray-800 dark:text-gray-300">
                Especializados en crear soluciones tecnológicas a medida para empresas de todos los tamaños.
            </p>
            <nav className="flex flex-wrap gap-4 mt-8">
                <SocialPill href="mailto:contacto@pixel.ec">
                    <BsMailbox size={20} />
                    Contáctanos
                </SocialPill>
                <SocialPill href="https://linkedin.com/company/pixel-ecuador">
                    <BsLinkedin size={20} />
                    LinkedIn
                </SocialPill>
            </nav>
        </div>
    );
}

export default Hero;