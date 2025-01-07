import VitalsDisplay from "../vitals/VitalsDisplay";
import MedicationsDisplay from "../medications/MedicationsDisplay";
import LabsDisplay from "../labs/LabsDisplay";
import HistoriaClinica from "../medical/HistoriaClinica";
import Diagnosticos from "../medical/Diagnosticos";
import Antecedentes from "../medical/Antecedentes";
import { Hc } from "@/types/medical";

interface ModalContentProps {
  activeSection: string;
  sections: Array<{ id: string; name: string; }>;
  data?: Hc;
}

const ModalContent = ({ activeSection, sections, data }: ModalContentProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case "historia":
        return <HistoriaClinica data={data?.hc[0]} />;
      case "diagnosticos":
        return <Diagnosticos diagnosticos={data?.dx} />;
      case "antecedentes":
        return <Antecedentes />;
      case "signos":
        return <VitalsDisplay vitals={data?.sign[0]} />;
      case "medicamentos":
        return <MedicationsDisplay medications={data?.drugs} />;
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