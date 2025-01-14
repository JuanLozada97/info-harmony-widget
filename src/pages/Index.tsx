import { useState } from "react";
import MedicalModal from "../components/MedicalModal";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    setIsLoading(true);
    setShowModal(true);
    // Simulate data fetching delay - remove this in production and replace with actual data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-medical-primary text-white rounded hover:bg-medical-secondary transition-colors"
      >
        Open Medical Record
      </button>

      {showModal && (
        <MedicalModal
          patientId="86063789"
          patientName="HECTOR OMBITA LOPEZ - (139667)"
          onClose={() => setShowModal(false)}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default Index;