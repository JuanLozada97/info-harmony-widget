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
        <div className="p-6">
          <div className="space-y-6">
            {/* This is where the actual content for each section would go */}
            <div className="text-medical-text">
              <p className="text-medical-muted">
                Contenido de {sections.find(s => s.id === activeSection)?.name}
              </p>
            </div>
          </div>
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