import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="font-press text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-cyan-300 mb-6 leading-tight">
          Opa, bem-vindo(a) querido(a)!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
          Me chamo João Paulo, sou desenvolvedor de software e entusiasta da área de Cibersegurança.
          Desde 2022 brincando de programar, desde 2024 Graduando em Ciências da Computação e descobrindo suas inúmeras vertentes.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-600 text-white rounded-lg font-mono hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-cyan-500/30"
        >
          Ver Projetos
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;