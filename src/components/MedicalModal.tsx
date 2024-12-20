import { X } from "lucide-react";
import { useState } from "react";

interface MedicalModalProps {
  patientId: string;
  patientName: string;
  onClose: () => void;
}

const MedicalModal = ({ patientId, patientName, onClose }: MedicalModalProps) => {
  const [activeSection, setActiveSection] = useState("historia");
  
  const sections = [
    { id: "historia", name: "Historia Clínica" },
    { id: "diagnosticos", name: "Diagnósticos" },
    { id: "antecedentes", name: "Antecedentes" },
    { id: "signos", name: "Signos Vitales" },
    { id: "medicamentos", name: "Medicamentos" },
    { id: "laboratorios", name: "Laboratorios" },
  ];

  const renderAntecedentes = () => {
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

  const renderDiagnosticos = () => {
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

  const renderHistoriaClinica = () => {
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

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center animate-fade-in">
      <div className="bg-medical-background w-full max-w-4xl rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="border-b border-medical-border p-4 flex justify-between items-center">
          <div>
            <h2 className="text-medical-text text-lg font-semibold">
              Identificación: {patientId}
            </h2>
            <p className="text-medical-muted text-sm">{patientName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-medical-muted hover:text-medical-text transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="border-b border-medical-border">
          <nav className="flex overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? "text-medical-primary border-b-2 border-medical-primary"
                    : "text-medical-muted hover:text-medical-text hover:bg-medical-hover"
                }`}
              >
                {section.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {activeSection === "historia" ? (
            renderHistoriaClinica()
          ) : activeSection === "diagnosticos" ? (
            renderDiagnosticos()
          ) : activeSection === "antecedentes" ? (
            renderAntecedentes()
          ) : (
            <div className="text-medical-muted">
              Contenido de {sections.find(s => s.id === activeSection)?.name}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-medical-border p-4 flex justify-between items-center">
          <div className="text-sm text-medical-muted">
            Estudio tomado por: LIDA MINGRED REY PEÑA
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-medical-primary text-white rounded hover:bg-medical-secondary transition-colors">
              Guardar
            </button>
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-medical-hover text-medical-muted rounded hover:text-medical-text transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalModal;
