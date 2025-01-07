import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  route: string;
  duration: string;
}

const medications: Medication[] = [
  {
    name: "ACETAMINOFEN 500 mg",
    dosage: "1 TABLETA",
    frequency: "Cada 8 horas",
    route: "Oral",
    duration: "5 días"
  },
  {
    name: "NAPROXENO 250 mg",
    dosage: "1 CAPSULA",
    frequency: "Cada 12 horas",
    route: "Oral",
    duration: "3 días"
  }
];

const MedicationsDisplay = () => {
  return (
    <div className="space-y-4">
      {medications.map((medication, index) => (
        <Collapsible key={index} className="border border-medical-border rounded-lg">
          <CollapsibleTrigger className="flex justify-between items-center w-full p-4 hover:bg-medical-hover">
            <span className="text-medical-text font-medium">{medication.name}</span>
            <ChevronDown className="h-5 w-5 text-medical-muted" />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 bg-medical-hover space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-medical-primary text-sm font-medium">Dosificación</p>
                <p className="text-medical-text">{medication.dosage}</p>
              </div>
              <div>
                <p className="text-medical-primary text-sm font-medium">Frecuencia</p>
                <p className="text-medical-text">{medication.frequency}</p>
              </div>
              <div>
                <p className="text-medical-primary text-sm font-medium">Vía</p>
                <p className="text-medical-text">{medication.route}</p>
              </div>
              <div>
                <p className="text-medical-primary text-sm font-medium">Duración</p>
                <p className="text-medical-text">{medication.duration}</p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default MedicationsDisplay;