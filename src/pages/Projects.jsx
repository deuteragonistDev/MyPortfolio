import { projects } from '../data/Projects';
import { FaGithub, FaExternalLinkAlt, FaStar, FaTag, FaCode, FaClock } from 'react-icons/fa';

export function Projects() {
  // Sort: featured first, then by date (newest first)
  const sortedProjects = [...projects]
    .filter(p => p.id !== '-1') // Exclude template project
    .sort((a, b) => {
      // Featured first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      // Then by date (newest first) - handle different date formats
      const dateA = new Date(a.date.split('/').reverse().join('-') || 0).getTime();
      const dateB = new Date(b.date.split('/').reverse().join('-') || 0).getTime();
      return dateB - dateA;
    });

  const getTypeColor = (type) => {
    switch (type) {
      case 'Acadêmico': return 'bg-blue-500/10 text-blue-300 border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/40';
      case 'Personal/academic/Profissional': return 'bg-purple-500/10 text-purple-300 border-purple-500/30 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-500/40';
      case 'Concepção de Produto': return 'bg-orange-500/10 text-orange-300 border-orange-500/30 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-500/40';
      default: return 'bg-gray-500/10 text-gray-300 border-gray-500/30 dark:bg-gray-500/20 dark:text-gray-300 dark:border-gray-500/40';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'Acadêmico': return '🎓 Acadêmico';
      case 'Personal/academic/Profissional': return '💼 Pessoal/Prof.';
      case 'Concepção de Produto': return '🚀 Produto';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-press text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-cyan-300 mb-4 tracking-tight">
            Projetos
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Coleção de projetos acadêmicos, pessoais e profissionais. Projetos em destaque aparecem primeiro.
          </p>
        </div>

        {/* Projects Grid - Mobile: 1 column, Desktop: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedProjects.map((project, index) => (
            <article
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Project Image / Header */}
              <div className="relative h-56 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-900/20 dark:to-purple-900/20 flex items-center justify-center overflow-hidden">
                {project.image && project.image !== './assets/image-name.png' ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-center p-8">
                    <FaCode className="w-16 h-16 text-cyan-400/50 dark:text-cyan-500/50 mx-auto mb-3" />
                    <p className="text-base text-gray-500 dark:text-gray-400 font-mono">Sem imagem</p>
                  </div>
                )}
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500 text-gray-900 rounded-full text-sm font-mono font-medium shadow-lg">
                      <FaStar className="w-4 h-4" /> Destaque
                    </span>
                  </div>
                )}

                {/* Featured indicator on card border */}
                {project.featured && (
                  <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-2xl pointer-events-none" />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title & Meta */}
                <div className="mb-4">
                  <h3 className="font-mono text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <FaTag className="w-4 h-4" /> {project.date}
                    </span>
                    {project.daysondev && (
                      <span className="flex items-center gap-1.5">
                        <FaClock className="w-4 h-4" /> {project.daysondev} dias
                      </span>
                    )}
                    <span className={`px-2.5 py-1 rounded-lg border text-xs font-medium ${getTypeColor(project.type)}`}>
                      {getTypeLabel(project.type)}
                    </span>
                  </div>
                </div>

                {/* Description - Better contrast in dark mode */}
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-5 leading-relaxed line-clamp-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                {(project.tags || []).length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {(project.tags || []).slice(0, 8).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-mono border border-gray-200 dark:border-gray-600 hover:bg-cyan-50 dark:hover:bg-cyan-900/30 hover:border-cyan-500/30 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {(project.tags || []).length > 8 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-500 rounded-lg text-sm font-mono border border-gray-200 dark:border-gray-600">
                        +{(project.tags || []).length - 8}
                      </span>
                    )}
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-5 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <h4 className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <FaStar className="w-4 h-4 text-yellow-500" />
                      Destaques Técnicos
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 4).map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-200 flex items-start gap-2 leading-relaxed">
                          <span className="text-cyan-500 mt-0.5 font-bold">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons - Full width on mobile, side by side on desktop */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.repository && project.repository !== 'github.com/deuteragonistDev/repo-name ' && (
                    <a
                      href={`https://${project.repository.replace('github.com/', 'github.com/')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl text-sm font-mono font-medium hover:bg-gray-700 dark:hover:bg-gray-200 hover:shadow-lg transition-all duration-200 group"
                    >
                      <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>Ver Código</span>
                    </a>
                  )}
                  {project.link && project.link !== 'Mysite.com' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-cyan-600 text-white rounded-xl text-sm font-mono font-medium hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200 group"
                    >
                      <FaExternalLinkAlt className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Ver Demo</span>
                    </a>
                  )}
                  {!project.repository && !project.link && (
                    <span className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-xl text-sm font-mono border border-gray-200 dark:border-gray-600">
                      Links indisponíveis
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <span className="text-gray-500 dark:text-gray-400 font-mono text-sm">
              Total: <span className="text-gray-900 dark:text-white font-bold">{projects.length - 1}</span> projetos
            </span>
            <span className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
            <span className="text-yellow-500 font-mono text-sm">
              <FaStar className="w-4 h-4 inline mr-1" /> <span className="font-bold">{projects.filter(p => p.featured).length}</span> em destaque
            </span>
            <span className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
            <span className="text-cyan-500 font-mono text-sm">
              <FaCode className="w-4 h-4 inline mr-1" /> <span className="font-bold">
                {[...new Set(projects.flatMap(p => p.tags || []))].length}
              </span> tecnologias
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}