import VitalsDisplay from "../vitals/VitalsDisplay";
import MedicationsDisplay from "../medications/MedicationsDisplay";
import LabsDisplay from "../labs/LabsDisplay";
import HistoriaClinica from "../medical/HistoriaClinica";
import Diagnosticos from "../medical/Diagnosticos";
import Antecedentes from "../medical/Antecedentes";

interface ModalContentProps {
  activeSection: string;
  sections: Array<{ id: string; name: string; }>;
}

const ModalContent = ({ activeSection, sections }: ModalContentProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case "historia":
        return <HistoriaClinica />;
      case "diagnosticos":
        return <Diagnosticos />;
      case "antecedentes":
        return <Antecedentes />;
      case "signos":
        return <VitalsDisplay />;
      case "medicamentos":
        return <MedicationsDisplay />;
      case "laboratorios":
        return <LabsDisplay />;
      default:
        return (
          <div className="text-medical-muted">
            Contenido de {sections.find(s => s.id === activeSection)?.name}
          </div>
        );
    }
  };

  return (
    <div className="p-6 h-[calc(100%-200px)] overflow-y-auto">
      {renderContent()}
    </div>
  );
};

export default ModalContent;