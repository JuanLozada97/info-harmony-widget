import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface VitalSign {
  timestamp: string;
  temperature: number;
  systolic: number;
  diastolic: number;
  heartRate: number;
}

// Sample data - in a real app, this would come from an API
const allVitalSignsData: VitalSign[] = [
  {
    timestamp: '8:00 AM',
    temperature: 36.8,
    systolic: 120,
    diastolic: 80,
    heartRate: 72,
  },
  {
    timestamp: '12:00 PM',
    temperature: 37.1,
    systolic: 118,
    diastolic: 78,
    heartRate: 75,
  },
  {
    timestamp: '4:00 PM',
    temperature: 37.0,
    systolic: 122,
    diastolic: 82,
    heartRate: 70,
  },
  {
    timestamp: '8:00 PM',
    temperature: 36.9,
    systolic: 115,
    diastolic: 75,
    heartRate: 68,
  },
];

const VitalsDisplay = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [vitalSignsData, setVitalSignsData] = useState<VitalSign[]>(allVitalSignsData);
  const currentVitals = vitalSignsData[vitalSignsData.length - 1];

  // In a real application, this would filter data based on the selected date
  const handleDateChange = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    // For demo purposes, we're just using the same data
    // In a real app, you would fetch/filter data for the selected date
    setVitalSignsData(allVitalSignsData);
  };

  return (
    <div className="space-y-6">
      {/* Date Selector */}
      <div className="flex items-center space-x-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Current Vitals Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border border-medical-border rounded-lg p-4">
          <h4 className="text-medical-muted text-sm mb-2">Temperatura</h4>
          <p className="text-medical-primary text-2xl font-semibold">
            {currentVitals.temperature}°C
          </p>
        </div>
        <div className="border border-medical-border rounded-lg p-4">
          <h4 className="text-medical-muted text-sm mb-2">Presión Arterial</h4>
          <p className="text-medical-primary text-2xl font-semibold">
            {currentVitals.systolic}/{currentVitals.diastolic} mmHg
          </p>
        </div>
        <div className="border border-medical-border rounded-lg p-4">
          <h4 className="text-medical-muted text-sm mb-2">Ritmo Cardíaco</h4>
          <p className="text-medical-primary text-2xl font-semibold">
            {currentVitals.heartRate} bpm
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="space-y-6">
        {/* Temperature Chart */}
        <div className="border border-medical-border rounded-lg p-4">
          <h4 className="text-medical-primary font-semibold mb-4">Temperatura</h4>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vitalSignsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="timestamp" stroke="#C8C8C9" />
                <YAxis stroke="#C8C8C9" domain={['auto', 'auto']} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px'
                  }}
                  labelStyle={{ color: '#C8C8C9' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#9b87f5" 
                  strokeWidth={2}
                  dot={{ fill: '#9b87f5' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Blood Pressure Chart */}
        <div className="border border-medical-border rounded-lg p-4">
          <h4 className="text-medical-primary font-semibold mb-4">Presión Arterial</h4>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vitalSignsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="timestamp" stroke="#C8C8C9" />
                <YAxis stroke="#C8C8C9" domain={['auto', 'auto']} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px'
                  }}
                  labelStyle={{ color: '#C8C8C9' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="systolic" 
                  stroke="#9b87f5" 
                  strokeWidth={2}
                  dot={{ fill: '#9b87f5' }}
                  name="Sistólica"
                />
                <Line 
                  type="monotone" 
                  dataKey="diastolic" 
                  stroke="#7E69AB" 
                  strokeWidth={2}
                  dot={{ fill: '#7E69AB' }}
                  name="Diastólica"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Heart Rate Chart */}
        <div className="border border-medical-border rounded-lg p-4">
          <h4 className="text-medical-primary font-semibold mb-4">Ritmo Cardíaco</h4>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vitalSignsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="timestamp" stroke="#C8C8C9" />
                <YAxis stroke="#C8C8C9" domain={['auto', 'auto']} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A1F2C',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px'
                  }}
                  labelStyle={{ color: '#C8C8C9' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="heartRate" 
                  stroke="#9b87f5" 
                  strokeWidth={2}
                  dot={{ fill: '#9b87f5' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitalsDisplay;