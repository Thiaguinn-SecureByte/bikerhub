import React from 'react';
import { Link } from 'react-router-dom';
import { MOTO_DATA } from '../data/motos';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const brands = Object.values(MOTO_DATA);

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Encuentra tu <span className="text-orange-500">Máquina</span>
        </h1>
        <p className="text-lg text-slate-400">
          Explora el catálogo más completo de motocicletas. Marcas legendarias, modelos icónicos y toda la información técnica en un solo lugar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            to={`/brand/${brand.id}`}
            className="group relative bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                {brand.name}
              </h2>
              <ChevronRight className="text-slate-600 group-hover:text-orange-500 transition-colors" />
            </div>
            <div className="text-slate-400 text-sm">
              <span className="font-mono text-orange-400">{brand.models.length}</span> Modelos disponibles
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;