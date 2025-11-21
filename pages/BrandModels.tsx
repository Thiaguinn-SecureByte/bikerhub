import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOTO_DATA } from '../data/motos';
import { Search, ArrowLeft } from 'lucide-react';
import AdSpace from '../components/AdSpace';

const BrandModels: React.FC = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const [filter, setFilter] = useState('');

  const brand = brandId ? MOTO_DATA[brandId] : null;

  const filteredModels = useMemo(() => {
    if (!brand) return [];
    if (!filter) return brand.models;
    return brand.models.filter((model) =>
      model.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [brand, filter]);

  if (!brand) {
    return <div className="text-center text-slate-400 py-20">Marca no encontrada</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-2 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Volver a marcas
          </Link>
          <h1 className="text-3xl font-bold text-white">{brand.name}</h1>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder={`Buscar modelos ${brand.name}...`}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-64 bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-slate-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModels.map((model) => (
          <Link
            key={model.id}
            to={`/brand/${brandId}/model/${model.id}`}
            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
          >
            <div className="h-40 bg-slate-700/50 overflow-hidden relative">
              {/* Placeholder Image Strategy using generic bike images or brand logos if available, defaulting to abstract */}
              <img 
                src={`https://picsum.photos/seed/${model.id}/400/300`} 
                alt={model.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                {model.name}
              </h3>
              <p className="text-sm text-slate-400">
                {model.years.length} Años disponibles ({Math.min(...model.years)} - {Math.max(...model.years)})
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredModels.length === 0 && (
        <div className="text-center py-12 bg-slate-800/50 rounded-xl border border-slate-700 border-dashed">
          <p className="text-slate-400">No se encontraron modelos con ese nombre.</p>
        </div>
      )}

      <AdSpace />
    </div>
  );
};

export default BrandModels;