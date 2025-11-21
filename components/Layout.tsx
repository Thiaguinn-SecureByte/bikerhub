import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              BikerHub
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link to="/" className="text-slate-300 hover:text-white hover:bg-slate-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Inicio
            </Link>
            <span className="text-slate-500 text-sm">Catálogo 2024</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-900 mt-auto py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-slate-500 text-sm">© {new Date().getFullYear()} BikerHub. Pasión por las dos ruedas.</p>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 selection:bg-orange-500 selection:text-white">
      <Navbar />
      
      {!process.env.API_KEY && (
        <div className="bg-yellow-900/30 border-b border-yellow-700/50 p-2">
           <div className="max-w-7xl mx-auto px-4 flex items-center justify-center text-yellow-500 text-sm">
             <AlertTriangle className="w-4 h-4 mr-2" />
             <span>Para ver especificaciones detalladas, asegúrate de configurar tu API Key de Google.</span>
           </div>
        </div>
      )}

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;