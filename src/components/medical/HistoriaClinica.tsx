import React from 'react';

const HistoriaClinica = () => {
  return (
    <div className="space-y-6">
      <div className="border border-medical-border rounded-lg p-4 space-y-4">
        {/* Specialty and Doctor Section */}
        <div className="border-b border-medical-border pb-3">
          <h3 className="text-medical-primary font-semibold text-lg">
            ORTOPEDIA Y TRAUMATOLOGIA
          </h3>
          <p className="text-medical-muted">Dr. CRISTIAN CAMILO FAJARDO CANTILLO</p>
        </div>

        {/* Date Section */}
        <div className="flex items-center space-x-2 py-2">
          <span className="text-medical-primary font-medium">Fecha Historia:</span>
          <span className="text-medical-text">Dec 12 2024 11:42PM</span>
        </div>

        {/* Clinical Notes Section */}
        <div className="space-y-3">
          <h4 className="text-medical-primary font-medium">REVALORACION ORTOPEDIA Y TRAUMATOLOGIA</h4>
          <div className="bg-medical-hover rounded-md p-4">
            <p className="text-medical-text leading-relaxed">
              SE REVALORA PACIENTE CON TAC DE CODO EL CUAL EVIDENCIA FRACTURA DE CUPULA RADIAL CON ESCALON ARTICULAR MENOR DE 3 MM AL EXAMEN FISICO SIN LIMITACION A LA PRONOSUPINACION.
            </p>
            <p className="text-medical-text leading-relaxed mt-2">
              SE CONSIDERA TRAZO DE FRACTURA SE BENEFICIA DE MANEJO ORTOPEDICO POR LO QUE SE DA EGRESO CON SIGNOS DE LARMA Y RECOMENDACIONES.
            </p>
            <p className="text-medical-text leading-relaxed mt-2">
              SE DA MANEJO ANALGESICO, INCAPACIDAD. CONTROL EN 3 SEMANAS POR CONSULTA EXTERNA CON RX.
            </p>
            <p className="text-medical-text leading-relaxed mt-2">
              SE EXPLICA CLARAMENTE A PACIENTE QUIENE NTIENDE YA CEPTA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoriaClinica;