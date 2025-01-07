import React from 'react';
import { Dx } from '@/types/medical';

interface DiagnosticosProps {
  diagnosticos?: Dx[];
}

const Diagnosticos = ({ diagnosticos }: DiagnosticosProps) => {
  if (!diagnosticos?.length) {
    return <div className="text-medical-muted">No hay diagnósticos disponibles</div>;
  }

  return (
    <div className="space-y-6">
      <div className="border border-medical-border rounded-lg p-4 space-y-4">
        {diagnosticos.map((dx, index) => (
          <div key={index} className="bg-medical-hover rounded-lg p-4">
            <h3 className="text-medical-primary font-semibold text-lg mb-2">
              {dx.codigoDx} - {dx.descripcionDx}
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-medical-primary font-medium">Observaciones:</span>
                <p className="text-medical-text flex-1">
                  {dx.observaciones || 'Sin observaciones adicionales'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diagnosticos;