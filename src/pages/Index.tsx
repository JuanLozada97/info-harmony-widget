import { useState } from "react";
import MedicalModal from "../components/MedicalModal";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-medical-primary text-white rounded hover:bg-medical-secondary transition-colors"
      >
        Open Medical Record
      </button>

      {showModal && (
        <MedicalModal
          patientId="86063789"
          patientName="HECTOR OMBITA LOPEZ - (139667)"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Index;