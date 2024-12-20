interface ModalFooterProps {
  onClose: () => void;
}

const ModalFooter = ({ onClose }: ModalFooterProps) => (
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
);

export default ModalFooter;