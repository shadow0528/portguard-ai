import React from 'react';
import { Plus, ToggleLeft, ToggleRight, Edit2, Trash2 } from 'lucide-react';

const PolicyManagement = () => {
  const policies = [
    { id: 1, name: 'Quarantine High Risk IoT', description: 'Automatically move IoT devices with risk score > 80 to VLAN 99.', status: 'Active', trigger: 'AI Risk Engine' },
    { id: 2, name: 'Unknown Device Onboarding', description: 'Force unknown MAC vendors to Registration Portal (VLAN 100).', status: 'Active', trigger: 'Discovery Engine' },
    { id: 3, name: 'Block Suspicious Scanners', description: 'Block ports if Nmap scanning behavior is detected.', status: 'Inactive', trigger: 'Security Threshold' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">NAC Policy Engine</h1>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center transition">
          <Plus size={18} className="mr-2" /> Create Policy
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {policies.map(policy => (
          <div key={policy.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition hover:border-gray-700">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-bold text-white mr-3">{policy.name}</h3>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${policy.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-700 text-gray-400'}`}>
                  {policy.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-3">{policy.description}</p>
              <div className="text-xs text-gray-500 font-mono bg-gray-950 inline-block px-2 py-1 rounded">
                Trigger: {policy.trigger}
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full md:w-auto justify-end border-t border-gray-800 md:border-t-0 pt-4 md:pt-0">
              <button className={`p-2 rounded hover:bg-gray-800 transition ${policy.status === 'Active' ? 'text-green-500' : 'text-gray-500'}`}>
                {policy.status === 'Active' ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
              </button>
              <button className="p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded transition">
                <Edit2 size={18} />
              </button>
              <button className="p-2 text-red-500 hover:text-white bg-red-500/10 hover:bg-red-600 rounded transition">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyManagement;
