import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface LabResult {
  name: string;
  date: string;
  results: {
    test: string;
    value: string;
    reference: string;
  }[];
}

const labResults: LabResult[] = [
  {
    name: "Hemograma Completo",
    date: "2024-03-15",
    results: [
      {
        test: "Hemoglobina",
        value: "14.5 g/dL",
        reference: "12.0 - 16.0 g/dL"
      },
      {
        test: "Leucocitos",
        value: "7.500/mm³",
        reference: "4.500 - 11.000/mm³"
      },
      {
        test: "Plaquetas",
        value: "250.000/mm³",
        reference: "150.000 - 450.000/mm³"
      }
    ]
  }
];

const LabsDisplay = () => {
  return (
    <div className="space-y-6">
      {labResults.map((lab, index) => (
        <Card key={index} className="bg-medical-background border-medical-border">
          <CardHeader>
            <CardTitle className="text-medical-primary text-lg">
              {lab.name}
              <span className="block text-sm text-medical-muted mt-1">
                Fecha: {lab.date}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lab.results.map((result, idx) => (
                <div key={idx} className="bg-medical-hover p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-medical-text font-medium">{result.test}</p>
                      <p className="text-medical-primary mt-1">{result.value}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-medical-muted text-sm">Rango de referencia:</p>
                      <p className="text-medical-muted text-sm">{result.reference}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LabsDisplay;