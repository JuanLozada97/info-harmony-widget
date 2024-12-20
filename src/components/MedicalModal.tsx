import { X } from "lucide-react";
import { useState } from "react";
import VitalsDisplay from "./vitals/VitalsDisplay";
import MedicationsDisplay from "./medications/MedicationsDisplay";
import LabsDisplay from "./labs/LabsDisplay";
import HistoriaClinica from "./medical/HistoriaClinica";
import Diagnosticos from "./medical/Diagnosticos";
import Antecedentes from "./medical/Antecedentes";
import { ResizablePanel, ResizablePanelGroup } from "./ui/resizable";

interface MedicalModalProps {
  patientId: string;
  patientName: string;
  onClose: () => void;
}

const MedicalModal = ({ patientId, patientName, onClose }: MedicalModalProps) => {
  const [activeSection, setActiveSection] = useState("historia");
  
  const sections = [
    { id: "historia", name: "Historia Clínica", component: HistoriaClinica },
    { id: "diagnosticos", name: "Diagnósticos", component: Diagnosticos },
    { id: "antecedentes", name: "Antecedentes", component: Antecedentes },
    { id: "signos", name: "Signos Vitales", component: VitalsDisplay },
    { id: "medicamentos", name: "Medicamentos", component: MedicationsDisplay },
    { id: "laboratorios", name: "Laboratorios", component: LabsDisplay },
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || HistoriaClinica;

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="fixed inset-0 bg-black/50 flex items-center justify-center animate-fade-in"
    >
      <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
        <div className="h-full bg-medical-background border-r border-medical-border">
          <nav className="flex flex-col">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-3 text-sm font-medium text-left transition-colors ${
                  activeSection === section.id
                    ? "text-medical-primary bg-medical-hover"
                    : "text-medical-muted hover:text-medical-text hover:bg-medical-hover"
                }`}
              >
                {section.name}
              </button>
            ))}
          </nav>
        </div>
      </ResizablePanel>

      <ResizablePanel defaultSize={80}>
        <div className="bg-medical-background h-full flex flex-col">
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

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <ActiveComponent />
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
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default MedicalModal;