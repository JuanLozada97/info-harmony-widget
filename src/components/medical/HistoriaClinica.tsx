import React from 'react';
import { HcElement } from '@/types/medical';

interface HistoriaClinicaProps {
  data?: HcElement;
}

const HistoriaClinica = ({ data }: HistoriaClinicaProps) => {
  if (!data) {
    return <div className="text-medical-muted">No hay historia clínica disponible</div>;
  }

  return (
    <div className="space-y-6">
      <div className="border border-medical-border rounded-lg p-4 space-y-4">
        <div className="border-b border-medical-border pb-3">
          <h3 className="text-medical-primary font-semibold text-lg">
            {data.especialidad}
          </h3>
          <p className="text-medical-muted">{data.profesional}</p>
        </div>

        <div className="flex items-center space-x-2 py-2">
          <span className="text-medical-primary font-medium">Fecha Historia:</span>
          <span className="text-medical-text">{data.fechaHistoriaFormateada}</span>
        </div>

        <div className="space-y-3">
          <h4 className="text-medical-primary font-medium">{data.tipo}</h4>
          <div className="bg-medical-hover rounded-md p-4">
            <p className="text-medical-text leading-relaxed">
              {data.analisis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriaClinica;