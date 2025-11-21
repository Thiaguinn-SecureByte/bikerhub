import React from 'react';

const AdSpace: React.FC = () => {
  return (
    <div className="w-full my-8 p-4 bg-slate-800/50 border border-dashed border-slate-700 rounded-lg flex flex-col items-center justify-center min-h-[120px] text-slate-500">
      <span className="text-xs font-semibold uppercase tracking-wider mb-2">Publicidad</span>
      <p className="text-sm">Espacio reservado para Google Ads</p>
    </div>
  );
};

export default AdSpace;