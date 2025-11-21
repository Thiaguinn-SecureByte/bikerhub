import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOTO_DATA } from '../data/motos';
import { ArrowLeft, Calendar, Bike } from 'lucide-react';
import AdSpace from '../components/AdSpace';

const ModelYears: React.FC = () => {
  const { brandId, modelId } = useParams<{ brandId: string; modelId: string }>();

  const brand = brandId ? MOTO_DATA[brandId] : null;
  const model = brand?.models.find((m) => m.id === modelId);

  if (!brand || !model) {
    return <div className="text-center text-slate-400 py-20">Modelo no encontrado</div>;
  }

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <Link to={`/brand/${brandId}`} className="inline-flex items-center text-slate-400 hover:text-white mb-4 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4 mr-1" /> Volver a {brand.name}
        </Link>
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-orange-500">{brand.name}</span>
          <span>{model.name}</span>
        </h1>
        <p className="text-slate-400 mt-2">Selecciona el año de fabricación para ver detalles específicos.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {model.years.map((year) => (
          <Link
            key={year}
            to={`/brand/${brandId}/model/${modelId}/year/${year}`}
            className="group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:bg-slate-700 hover:border-orange-500/50 transition-all duration-200 text-center"
          >
            <div className="w-12 h-12 mx-auto bg-slate-700/50 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-500/20 group-hover:text-orange-500 transition-colors">
               <Calendar className="w-6 h-6 text-slate-400 group-hover:text-orange-500" />
            </div>
            <span className="text-xl font-bold text-white block group-hover:scale-110 transition-transform">
              {year}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center bg-slate-800/30 rounded-2xl p-8 border border-slate-800">
         <div className="order-2 md:order-1">
           <h2 className="text-2xl font-bold text-white mb-4">Sobre la {model.name}</h2>
           <p className="text-slate-400 leading-relaxed">
             Esta legendaria motocicleta de {brand.name} ha evolucionado a lo largo de los años. 
             Explora las versiones específicas para descubrir cómo ha cambiado su motor, chasis y tecnología.
             Nuestra base de datos impulsada por IA te dará los detalles exactos de cada iteración.
           </p>
         </div>
         <div className="order-1 md:order-2 flex justify-center">
            <Bike className="w-32 h-32 text-slate-700" />
         </div>
      </div>

      <AdSpace />
    </div>
  );
};

export default ModelYears;