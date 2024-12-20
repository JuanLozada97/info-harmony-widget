import { X } from "lucide-react";

interface ModalHeaderProps {
  patientId: string;
  patientName: string;
  onClose: () => void;
}

const ModalHeader = ({ patientId, patientName, onClose }: ModalHeaderProps) => (
  <div className="border-b border-medical-border p-4 flex justify-between items-center modal-handle cursor-move">
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
);

export default ModalHeader;