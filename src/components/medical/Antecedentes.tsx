import React from "react";

const Antecedentes = () => {
  return (
    <div className="space-y-6">
      <div className="border border-medical-border rounded-lg p-4">
        {/* Medical History Header */}
        <div className="mb-4">
          <h3 className="text-medical-primary font-semibold text-lg">
            Antecedentes Medicos
          </h3>
          <p className="text-medical-muted text-sm">
            Dic 12 2024 8:27PM S508 - OTROS TRAUMATISMOS SUPERFICIALES DEL ANTEBRAZO
          </p>
        </div>

        {/* Medical History Content */}
        <div className="space-y-4">
          <div className="bg-medical-hover rounded-lg p-4">
            <div className="space-y-2">
              <p className="text-medical-text">
                No se reportan antecedentes médicos relevantes para el diagnóstico actual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Antecedentes;