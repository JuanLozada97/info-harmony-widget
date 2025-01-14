import { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import ModalHeader from "./modal/ModalHeader";
import ModalNavigation from "./modal/ModalNavigation";
import ModalContent from "./modal/ModalContent";
import ModalFooter from "./modal/ModalFooter";
import { Skeleton } from "@/components/ui/skeleton";

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
          {isLoading ? (
            <div className="p-6 space-y-4">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-8 w-3/4" />
            </div>
          ) : (
            <>
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
            </>
          )}
        </ResizableBox>
      </Draggable>
    </div>
  );
};

export default MedicalModal;