# PurpleCat Dev Portfolio

> 🔗 **Live Demo:** [https://deuteragonistDev.github.io/MyPortfolio/](https://deuteragonistDev.github.io/MyPortfolio/)

Portfólio pessoal de **João Paulo** — Desenvolvedor de Software & Entusiasta de Cibersegurança, Graduando em Ciência da Computação.

## 🚀 Tecnologias Utilizadas

- **React 19** — Biblioteca para interfaces de usuário
- **Tailwind CSS v4** — Framework CSS utility-first
- **React Router DOM v7** — Roteamento SPA
- **React Icons** — Biblioteca de ícones
- **Vite 8** — Build tool e dev server
- **ESLint** — Linting e qualidade de código
- **GitHub Pages** — Deploy automático

## 📁 Estrutura do Projeto

```
MyPortfolio/
├── public/                 # Assets estáticos (favicon, og-image)
├── src/
│   ├── assets/             # Imagens e recursos
│   ├── Components/         # Componentes reutilizáveis
│   │   ├── Topbar.jsx      # Navegação + Dark Mode
│   │   └── darkmode.jsx    # Gerenciamento de tema
│   ├── data/
│   │   └── Projects.jsx    # Dados dos 13 projetos
│   ├── pages/
│   │   ├── Home.jsx        # Landing page com visão geral
│   │   ├── Hero.jsx        # Seção "Sobre mim"
│   │   └── Projects.jsx    # Listagem filtrável de projetos
│   ├── App.jsx             # Roteamento principal
│   ├── main.jsx            # Entry point
│   ├── index.css           # Estilos globais + Tailwind
│   └── App.css             # Estilos específicos do App
├── index.html              # HTML template + SEO/OG tags
├── vite.config.js          # Configuração Vite
├── package.json            # Dependências e scripts
└── BUGS.md                 # Lista de issues conhecidos
```

## 🎯 Funcionalidades

- ✅ **Dark/Light Mode** com persistência no localStorage
- ✅ **Design Responsivo** (mobile-first)
- ✅ **Roteamento SPA** com HashRouter (compatível GitHub Pages)
- ✅ **Página de Projetos** com filtros por tag, tipo e busca textual
- ✅ **SEO Otimizado** — Open Graph, Twitter Cards, JSON-LD
- ✅ **Acessibilidade** — ARIA labels, focus-visible, prefers-reduced-motion
- ✅ **Performance** — Font preconnect, code splitting via Vite

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint

# Deploy no GitHub Pages
npm run deploy
```

## 🚀 Deploy

O projeto está configurado para deploy automático no GitHub Pages:

1. `npm run build` — Gera pasta `dist/`
2. `npm run deploy` — Publica via `gh-pages`

> **Nota:** O `vite.config.js` usa `base: '/MyPortfolio/'` para funcionar corretamente no GitHub Pages.

## 📋 Páginas

| Rota | Componente | Descrição |
| ------ | ------------ | ----------- |
| `/` | `Home` | Landing page com stats, áreas de foco e tech stack |
| `/hero` | `Hero` | Seção "Sobre mim" com CTA para projetos |
| `/projects` | `Projects` | Grid filtrável com todos os 12 projetos |

## 📦 Projetos em Destaque

O portfólio contém **13 projetos** categorizados como:

- **Acadêmicos** (9) — Trabalhos de faculdade: compiladores, SO, IA, algoritmos
- **Pessoais/Profissionais** (3) — Full-stack, sistemas embarcados, EdTech
- **Concepção de Produto** (1) — UX/UI, Product Management, Gamificação

**Projetos marcados como destaque (⭐):**

- Sistema de Análise e Ordenação de Filmes (C, Algoritmos)
- Relógio Digital RISC-V Bare Metal (Assembly, Embarcados)
- Alocador de Pilha Dinâmica com Syscall brk (Assembly, SO)
- OPZIP - Compressor Paralelo (C, Pthreads, Concorrência)
- FrotaGesta - Gestão de Frotas (Java/Spring Boot + React)
- Fundações Matemáticas de IA (ML, Cálculo, Otimização)

## 🎨 Personalização

### Cores (Tailwind v4)

Edite `src/index.css` na seção `@theme`:

```css
@theme {
  --color-cyan-600: #0891b2;  /* Cor primária */
  --color-cyan-700: #0e7490;  /* Hover primário */
}
```

### Fontes

- **Monospace:** IBM Plex Mono (código, UI)
- **Display:** Press Start 2P (títulos, branding)

### Tema Escuro/Claro

Controlado via `localStorage.theme` + `prefers-color-scheme` em `src/Components/darkmode.jsx`.

## 📝 Issues Conhecidos

Consulte [`BUGS.md`](BUGS.md) para lista completa de inconsistências e melhorias planejadas.

## 🤝 Contribuição

Este é um portfólio pessoal, mas sugestões são bem-vindas via Issues ou PR.

## 📄 Licença

MIT License — veja [LICENSE](LICENSE) para detalhes.

---

<div align="center">
  <sub>Feito com ☕ e <span style="color: #0891b2">❤</span> por <a href="https://github.com/deuteragonistDev">PurpleCat Dev</a></sub>
</div>
