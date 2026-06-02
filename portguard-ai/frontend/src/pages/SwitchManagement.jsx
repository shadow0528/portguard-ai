import React from 'react';
import { Network, Plus, Server, Activity } from 'lucide-react';

const SwitchManagement = () => {
  const switches = [
    { id: 1, name: 'CORE-SW-01', ip: '10.0.1.5', vendor: 'Cisco', status: 'ONLINE', uptime: '45d 12h', ports: 48 },
    { id: 2, name: 'EDGE-SW-02', ip: '10.0.1.12', vendor: 'Aruba', status: 'ONLINE', uptime: '12d 5h', ports: 24 },
    { id: 3, name: 'BRANCH-RTR', ip: '10.0.2.1', vendor: 'MikroTik', status: 'OFFLINE', uptime: '-', ports: 8 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">Infrastructure & Switch Management</h1>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center transition">
          <Plus size={18} className="mr-2" /> Add Switch
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-1">Total Switches</p>
            <h3 className="text-2xl font-bold text-white">12</h3>
          </div>
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500"><Server size={24} /></div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-1">Active Links</p>
            <h3 className="text-2xl font-bold text-white">845</h3>
          </div>
          <div className="p-3 bg-green-500/10 rounded-lg text-green-500"><Activity size={24} /></div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-1">Offline Nodes</p>
            <h3 className="text-2xl font-bold text-red-500">1</h3>
          </div>
          <div className="p-3 bg-red-500/10 rounded-lg text-red-500"><Network size={24} /></div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-950 text-gray-400 border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Hostname</th>
                <th className="px-6 py-4 font-medium">IP Address</th>
                <th className="px-6 py-4 font-medium">Vendor</th>
                <th className="px-6 py-4 font-medium">Ports</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Uptime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {switches.map(sw => (
                <tr key={sw.id} className="hover:bg-gray-800/50 transition cursor-pointer">
                  <td className="px-6 py-4 text-white font-medium flex items-center">
                    <Server size={16} className="mr-2 text-gray-500" />
                    {sw.name}
                  </td>
                  <td className="px-6 py-4 text-gray-300 font-mono">{sw.ip}</td>
                  <td className="px-6 py-4 text-gray-300">{sw.vendor}</td>
                  <td className="px-6 py-4 text-gray-300">{sw.ports}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded text-xs font-medium ${sw.status === 'ONLINE' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                      {sw.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{sw.uptime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SwitchManagement;
