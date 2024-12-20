import React from 'react';

const Diagnosticos = () => {
  return (
    <div className="space-y-6">
      <div className="border border-medical-border rounded-lg p-4 space-y-4">
        {/* First Diagnosis */}
        <div className="bg-medical-hover rounded-lg p-4">
          <h3 className="text-medical-primary font-semibold text-lg mb-2">
            S508 - OTROS TRAUMATISMOS SUPERFICIALES DEL ANTEBRAZO
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-medical-primary font-medium">Observaciones:</span>
              <p className="text-medical-text flex-1">
                Sin observaciones adicionales
              </p>
            </div>
          </div>
        </div>

        {/* Second Diagnosis */}
        <div className="bg-medical-hover rounded-lg p-4">
          <h3 className="text-medical-primary font-semibold text-lg mb-2">
            S521 - FRACTURA DE LA EPIFISIS SUPERIOR DEL RADIO
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-medical-primary font-medium">Observaciones:</span>
              <p className="text-medical-text flex-1">
                Sin observaciones adicionales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosticos;