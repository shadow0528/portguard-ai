import React from 'react';
import { ShieldAlert, AlertTriangle, AlertOctagon } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const AIRiskInsights = () => {
  const riskFactors = [
    { subject: 'Open Ports', A: 85, fullMark: 100 },
    { subject: 'Vulnerabilities', A: 60, fullMark: 100 },
    { subject: 'Malware', A: 20, fullMark: 100 },
    { subject: 'Policy Violations', A: 90, fullMark: 100 },
    { subject: 'Rogue Behavior', A: 40, fullMark: 100 },
    { subject: 'Unknown Vendor', A: 75, fullMark: 100 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white tracking-wide">AI Risk Insights</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-1">Global Threat Level</p>
              <h3 className="text-2xl font-bold text-orange-500">ELEVATED</h3>
            </div>
            <div className="p-4 bg-orange-500/10 rounded-full text-orange-500"><AlertTriangle size={32} /></div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-white mb-4">Risk Distribution</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-300">High Risk Assets</span><span className="text-red-500 font-bold">12</span></div>
                <div className="w-full bg-gray-800 rounded-full h-2"><div className="bg-red-500 h-2 rounded-full" style={{ width: '12%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-300">Medium Risk Assets</span><span className="text-orange-500 font-bold">45</span></div>
                <div className="w-full bg-gray-800 rounded-full h-2"><div className="bg-orange-500 h-2 rounded-full" style={{ width: '45%' }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-300">Low Risk Assets</span><span className="text-green-500 font-bold">893</span></div>
                <div className="w-full bg-gray-800 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-medium text-white mb-6">AI Risk Vector Analysis</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={riskFactors}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#4b5563" />
                <Radar name="Enterprise Posture" dataKey="A" stroke="#ef4444" fill="#ef4444" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRiskInsights;
