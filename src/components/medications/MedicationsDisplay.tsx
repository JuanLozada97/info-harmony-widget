import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Drug } from '@/types/medical';

interface MedicationsDisplayProps {
  medications?: Drug[];
}

const MedicationsDisplay = ({ medications }: MedicationsDisplayProps) => {
  if (!medications?.length) {
    return <div className="text-medical-muted">No hay medicamentos disponibles</div>;
  }

  return (
    <div className="space-y-4">
      {medications.map((medication, index) => (
        <Collapsible key={index} className="border border-medical-border rounded-lg">
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 hover:bg-medical-hover">
            <span className="text-medical-text font-medium">{medication.medicamento}</span>
            <ChevronDown className="h-5 w-5 text-medical-muted" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 bg-medical-hover space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-medical-primary text-sm font-medium">Fecha</p>
                <p className="text-medical-text">{medication.fechaFormateada}</p>
              </div>
              <div>
                <p className="text-medical-primary text-sm font-medium">Médico</p>
                <p className="text-medical-text">{medication.medico}</p>
              </div>
              <div>
                <p className="text-medical-primary text-sm font-medium">Folio</p>
                <p className="text-medical-text">{medication.folio}</p>
              </div>
              <div>
                <p className="text-medical-primary text-sm font-medium">Estado</p>
                <p className="text-medical-text">{medication.estado === 1 ? 'Activo' : 'Inactivo'}</p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default MedicationsDisplay;