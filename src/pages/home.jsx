import { Link } from 'react-router-dom';
import { FaCode, FaGraduationCap, FaLaptopCode, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

export function Home() {
  const stats = [
    { icon: FaCode, label: 'Projetos', value: '13+', color: 'text-cyan-400' },
    { icon: FaGraduationCap, label: 'Anos Estudando', value: '4+', color: 'text-purple-400' },
    { icon: FaLaptopCode, label: 'Tecnologias', value: '15+', color: 'text-orange-400' },
    { icon: FaShieldAlt, label: 'Foco Segurança', value: 'In', color: 'text-red-400' },
  ];

  const techStack = [
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'TypeScript', color: 'bg-blue-500' },
    { name: 'Java', color: 'bg-red-500' },
    { name: 'Python', color: 'bg-yellow-400 text-gray-900' },
    { name: 'C', color: 'bg-blue-700' },
    { name: 'RISC-V Assembly', color: 'bg-gray-700' },
    { name: 'Spring Boot', color: 'bg-green-600' },
    { name: 'PostgreSQL', color: 'bg-blue-800' },
    { name: 'Tailwind CSS', color: 'bg-cyan-400 text-gray-900' },
    { name: 'Git/GitHub', color: 'bg-orange-500' },
    { name: 'Docker', color: 'bg-blue-400' },
    { name: 'Linux', color: 'bg-yellow-500 text-gray-900' },
  ];

  const focusAreas = [
    { title: 'Desenvolvimento Full-Stack', desc: 'React, Spring Boot, APIs REST, microsserviços' },
    { title: 'Sistemas Embarcados & Baixo Nível', desc: 'RISC-V Assembly, Bare Metal, RTOS, Drivers' },
    { title: 'Algoritmos & Estruturas de Dados', desc: 'Otimização, Complexidade, Compiladores' },
    { title: 'Cibersegurança', desc: 'Análise de vulnerabilidades, Hardening, Criptografia' },
    { title: 'Qualidade de Software', desc: 'Testes automatizados, SonarQube, Clean Code' },
    { title: 'Arquitetura & Design de Sistemas', desc: 'Padrões, Escalabilidade, Observabilidade' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Hero Section - Larger, more prominent */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 py-24 md:py-40 lg:py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="font-press text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-cyan-300 mb-8 leading-tight tracking-tight">
              Olá, sou <span className="text-cyan-600 dark:text-cyan-400">João Paulo</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed font-light">
              Desenvolvedor de Software & Entusiasta de Cibersegurança
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Graduando em Ciência da Computação
            </p>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed italic">
              "Desde 2022 transformando café em código, desde 2024 explorando as infinitas vertentes da Computação."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <Link
                to="/projects"
                className="group px-10 py-4 bg-cyan-600 text-white rounded-xl font-mono text-lg hover:bg-cyan-700 transition-all duration-300 shadow-xl hover:shadow-cyan-500/40 hover:scale-105"
              >
                Ver Projetos
                <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://github.com/deuteragonistDev"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl font-mono text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 border border-gray-700 dark:border-gray-300 hover:shadow-xl hover:scale-105"
              >
                GitHub
                <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Stats - Larger cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-850 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className={`text-4xl ${stat.color} mb-3`}>
                  <stat.icon className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="text-4xl md:text-5xl font-bold font-mono text-gray-900 dark:text-gray-600 dark:hover:text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-base text-gray-500 dark:text-gray-600 font-press uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas - More spacious */}
      <section className="py-24 lg:py-32 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-press text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-cyan-300 mb-4">
              Áreas de Foco
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Especialidades técnicas desenvolvidas através de projetos práticos e acadêmicos
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => (
              <div
                key={i}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500"
              >
                <h3 className="font-mono text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Larger tags */}
      <section className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-press text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-cyan-300 mb-4">
              Stack Tecnológica
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ferramentas e linguagens utilizadas
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className={`px-6 py-3 rounded-xl text-base font-mono font-medium ${tech.color} text-white dark:text-gray-900 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer - More prominent */}
      <section className="py-24 bg-gray-900 dark:bg-gray-950 transition-colors relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h3 className="font-press text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Quer colaborar ou bater um papo?
          </h3>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Estou sempre aberto a novos desafios, oportunidades de aprendizado e projetos interessantes.
          </p>
          <a
            href="https://github.com/deuteragonistDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-cyan-600 text-white rounded-xl font-mono text-lg hover:bg-cyan-700 hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            <FaCode className="w-6 h-6" />
            Conectar no GitHub
            <FaArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}