import React from 'react';
import { Sign } from '@/types/medical';

interface VitalsDisplayProps {
  vitals?: Sign;
}

const VitalsDisplay = ({ vitals }: VitalsDisplayProps) => {
  if (!vitals) {
    return <div className="text-medical-muted">No hay signos vitales disponibles</div>;
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-medical-border rounded-lg p-4">
          <h3 className="text-medical-primary font-medium mb-2">Tensión Arterial</h3>
          <div className="flex gap-4">
            <div>
              <p className="text-sm text-medical-muted">Sistólica</p>
              <p className="text-lg font-semibold text-medical-text">{vitals.tenartsis}</p>
            </div>
            <div>
              <p className="text-sm text-medical-muted">Diastólica</p>
              <p className="text-lg font-semibold text-medical-text">{vitals.tenartdia}</p>
            </div>
          </div>
        </div>

        <div className="border border-medical-border rounded-lg p-4">
          <h3 className="text-medical-primary font-medium mb-2">Temperatura</h3>
          <p className="text-lg font-semibold text-medical-text">{vitals.temperpac}°C</p>
        </div>

        <div className="border border-medical-border rounded-lg p-4">
          <h3 className="text-medical-primary font-medium mb-2">Frecuencia Cardíaca</h3>
          <p className="text-lg font-semibold text-medical-text">{vitals.frecarpac} lpm</p>
        </div>

        <div className="border border-medical-border rounded-lg p-4">
          <h3 className="text-medical-primary font-medium mb-2">Fecha de Registro</h3>
          <p className="text-lg font-semibold text-medical-text">{vitals.fechaRegistro}</p>
        </div>
      </div>
    </div>
  );
};

export default VitalsDisplay;