# Remove It Services - Commercial Junk Removal Website

A modern, responsive website for commercial junk removal and cleaning services built with React and TypeScript.

## Features

- 🎨 Modern, responsive design with smooth animations
- 🚀 Fast performance with Vite
- 📱 Mobile-first approach
- 🎭 Beautiful UI components with shadcn-ui
- ✨ Smooth scroll animations with Framer Motion
- 📄 Multiple pages: Home, Services, Industries, Service Areas, About, Contact, Blog

## Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library
- **React Router** - Client-side routing
- **shadcn-ui** - High-quality component library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **TanStack Query** - Data fetching and state management

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
│   ├── home/      # Homepage sections
│   ├── layout/    # Header, Footer
│   └── ui/        # UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── main.tsx       # Application entry point
```

## Deployment

Build the project for production:

```sh
npm run build
```

The `dist` folder will contain the production-ready files that can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any other static hosting provider

## License

All rights reserved.
