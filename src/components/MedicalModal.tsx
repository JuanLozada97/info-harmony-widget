import { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import ModalHeader from "./modal/ModalHeader";
import ModalNavigation from "./modal/ModalNavigation";
import ModalContent from "./modal/ModalContent";
import ModalFooter from "./modal/ModalFooter";

interface MedicalModalProps {
  patientId: string;
  patientName: string;
  onClose: () => void;
  isLoading?: boolean;
}

const MedicalModal = ({ patientId, patientName, onClose, isLoading = false }: MedicalModalProps) => {
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
      <Draggable handle=".modal-handle" bounds="parent">
        {isLoading ? (
          <div className="bg-medical-background rounded-lg shadow-xl p-8 w-[400px] h-[200px] flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-medical-primary mx-auto"></div>
              <p className="text-medical-text">Loading medical records...</p>
            </div>
          </div>
        ) : (
          <ResizableBox
            width={800}
            height={600}
            minConstraints={[400, 300]}
            maxConstraints={[1200, 800]}
            className="bg-medical-background rounded-lg shadow-xl overflow-hidden resize-handle"
          >
            <ModalHeader
              patientId={patientId}
              patientName={patientName}
              onClose={onClose}
            />
            <ModalNavigation
              sections={sections}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
            <ModalContent
              activeSection={activeSection}
              sections={sections}
            />
            <ModalFooter onClose={onClose} />
          </ResizableBox>
        )}
      </Draggable>
    </div>
  );
};

export default MedicalModal;