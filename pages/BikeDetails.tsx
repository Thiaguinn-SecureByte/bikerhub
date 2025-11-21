import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MOTO_DATA } from "../data/motos";
import { generateBikeDetails } from "../services/geminiService";
import { BikeDetailsData } from "../types";
import { ArrowLeft, Activity, Info, History, Zap, Scale, Gauge, Ruler } from "lucide-react";
import AdSpace from "../components/AdSpace";

const BikeDetails: React.FC = () => {
  const { brandId, modelId, year } = useParams<{ brandId: string; modelId: string; year: string }>();
  const [details, setDetails] = useState<BikeDetailsData | null>(null);
  const [loading, setLoading] = useState(true);

  const brand = brandId ? MOTO_DATA[brandId] : null;
  const model = brand?.models.find((m) => m.id === modelId);

  useEffect(() => {
    if (brand && model && year) {
      setLoading(true);
      generateBikeDetails(brand.name, model.name, year)
        .then((data) => {
          setDetails(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [brand, model, year]);

  if (!brand || !model || !year) {
    return <div className="text-center text-slate-400 py-20">Moto no encontrada</div>;
  }

  return (
    <div className="space-y-8">
      {/* Navigation & Header */}
      <div>
        <Link
          to={`/brand/${brandId}/model/${modelId}`}
          className="inline-flex items-center text-slate-400 hover:text-white mb-4 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Volver a años
        </Link>
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            {brand.name}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              {model.name}
            </span>
          </h1>
          <span className="text-3xl font-bold text-slate-600 bg-slate-800 px-4 py-1 rounded-lg border border-slate-700">
            {year}
          </span>
        </div>
      </div>

      {/* Main Image & Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
          {/* Placeholder for bike specific image */}
          <img
            src={`https://picsum.photos/seed/${brandId}${modelId}${year}/800/600`}
            alt={`${brand.name} ${model.name}`}
            className="w-full h-full object-cover min-h-[300px]"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-4 bg-slate-800 rounded w-3/4"></div>
              <div className="h-4 bg-slate-800 rounded w-full"></div>
              <div className="h-4 bg-slate-800 rounded w-5/6"></div>
              <div className="h-32 bg-slate-800 rounded w-full mt-8"></div>
            </div>
          ) : (
            <>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-orange-500" /> Resumen
                </h3>
                <p className="text-slate-300 leading-relaxed">{details?.description}</p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                  <History className="w-5 h-5 text-blue-500" /> Historia & Contexto
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm italic">"{details?.history}"</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Tech Specs Grid */}
      <div className="pt-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <Activity className="w-6 h-6 mr-2 text-orange-500" /> Ficha Técnica
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {loading ? (
            Array(5)
              .fill(0)
              .map((_, i) => <div key={i} className="bg-slate-800 h-24 rounded-xl animate-pulse" />)
          ) : (
            <>
              <SpecCard icon={<Zap />} label="Motor" value={details?.specs.engine} color="text-yellow-500" />
              <SpecCard icon={<Gauge />} label="Potencia" value={details?.specs.power} color="text-red-500" />
              <SpecCard icon={<Activity />} label="Torque" value={details?.specs.torque} color="text-green-500" />
              <SpecCard icon={<Scale />} label="Peso" value={details?.specs.weight} color="text-blue-500" />
              <SpecCard icon={<Ruler />} label="Asiento" value={details?.specs.seatHeight} color="text-purple-500" />
            </>
          )}
        </div>
      </div>

      <AdSpace />
    </div>
  );
};

interface SpecCardProps {
  icon: React.ReactNode;
  label: string;
  value?: string;
  color: string;
}

const SpecCard: React.FC<SpecCardProps> = ({ icon, label, value, color }) => (
  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col items-center text-center hover:border-slate-600 transition-colors">
    <div className={`mb-2 p-2 bg-slate-900 rounded-full ${color}`}>
      {React.cloneElement(icon as React.ReactElement, { size: 20 })}
    </div>
    <span className="text-slate-500 text-xs uppercase tracking-wide mb-1">{label}</span>
    <span className="text-white font-bold text-lg">{value || "N/A"}</span>
  </div>
);

/*
const SpecCard: React.FC<SpecCardProps> = ({ icon, label, value, color }) => (
  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex flex-col items-center text-center hover:border-slate-600 transition-colors">
    <div className={`mb-2 p-2 bg-slate-900 rounded-full ${color}`}>
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 20 })
        : icon}
    </div>
    <span className="text-slate-500 text-xs uppercase tracking-wide mb-1">{label}</span>
    <span className="text-white font-bold text-lg">{value || "N/A"}</span>
  </div>
);
*/

export default BikeDetails;
