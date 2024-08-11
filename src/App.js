import logo from './logo.svg';
import Header from './components/Header';
import SectionContainer from './components/SectionContainer';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { BiBriefcase, BiCode } from 'react-icons/bi';
import IconCloud from './components/Cloud';

function App() {
  const iconSlugs = [
    "javascript",
    "react",
    "node-dot-js",
    "html5",
    "css3",
    "next-dot-js",
    "typescript",
    "python",
    "java",
    "php",
    "docker",
    "kubernetes",
    "git",
    "github",
    "gitlab",
    "bash",
    "linux",
    "aws",
    "firebase",
    "mongodb",
    "postgresql",
    "mysql",
    "figma",
    "sass",
    "tailwindcss",
    "webpack",
    "babel",
    "redux",
    "vue-dot-js",
    "angular",
    "graphql",
    "jest",
    "eslint",
    "prettier",
    "heroku",
    "digitalocean",
    "netlify",
    "vercel",
    "nginx",
  ];

  return (
    <div className="App relative text-black dark:text-white">
      <div
        className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      >
      </div>
      <Header />

      <main className="px-4">
        <SectionContainer className="py-16 md:py-36">
          <Hero />
          <IconCloud iconSlugs={iconSlugs} />
        </SectionContainer>

        <div className="space-y-24">
          
          <SectionContainer id="experiencia">

            <h2
              className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"
            >
              <BiBriefcase className="size-8" />
              Experiencia laboral
            </h2>
            <Experience />
            
          </SectionContainer>


          <SectionContainer id="proyectos">
            <h2
              className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"
            >
              <BiCode className="size-7" />
              Proyectos
            </h2>
            <Projects />
          </SectionContainer>


        </div>
      </main>
    </div>
  );
}

export default App;
