import React from 'react';
import { Check, X, ShieldAlert, Clock } from 'lucide-react';

const DeviceApprovalQueue = () => {
  const pendingDevices = [
    { id: '1', mac: 'FF:EE:DD:CC:BB:AA', ip: '10.0.100.12', vendor: 'Unknown', type: 'IoT', user: 'guest-102', time: '10 mins ago', risk: 65 },
    { id: '2', mac: '11:22:33:44:55:66', ip: '10.0.100.15', vendor: 'Sony', type: 'Mobile', user: 'EMP-9921', time: '1 hour ago', risk: 10 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">Approval Queue</h1>
        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-4 py-2 rounded-lg text-sm flex items-center">
          <Clock size={16} className="mr-2" /> 2 Devices Pending
        </div>
      </div>

      <div className="grid gap-6">
        {pendingDevices.map(device => (
          <div key={device.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 transition hover:border-gray-700">
            
            <div className="flex items-center w-full md:w-1/3">
              <div className={`p-4 rounded-full mr-4 ${device.risk > 50 ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                <ShieldAlert size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-mono">{device.mac}</h3>
                <p className="text-sm text-gray-400">{device.vendor} • {device.type}</p>
              </div>
            </div>

            <div className="flex-1 w-full flex justify-between px-6 border-x border-gray-800">
              <div className="space-y-1 text-sm">
                <p><span className="text-gray-500 inline-block w-24">IP Address:</span> <span className="text-gray-300">{device.ip}</span></p>
                <p><span className="text-gray-500 inline-block w-24">Requested By:</span> <span className="text-gray-300">{device.user}</span></p>
                <p><span className="text-gray-500 inline-block w-24">Time:</span> <span className="text-gray-300">{device.time}</span></p>
              </div>
              <div className="text-center">
                <span className="block text-xs text-gray-500 mb-1">AI Risk Score</span>
                <span className={`text-2xl font-bold ${device.risk > 50 ? 'text-red-500' : 'text-green-500'}`}>{device.risk}</span>
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-row md:flex-col gap-3">
              <button className="flex-1 bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center transition">
                <Check size={18} className="mr-2" /> Approve
              </button>
              <button className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center transition">
                <X size={18} className="mr-2 text-red-400" /> Reject
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceApprovalQueue;
