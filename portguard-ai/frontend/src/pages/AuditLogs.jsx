import React from 'react';
import { Download, Search, Filter } from 'lucide-react';

const AuditLogs = () => {
  const logs = [
    { id: 1, timestamp: '2026-06-01 14:02:11', actor: 'SYSTEM (AI Engine)', action: 'Risk Score Updated', target: 'A8:1D:5E:CA:EF:33', result: 'SUCCESS', details: 'Score increased from 40 to 85 due to open port 445' },
    { id: 2, timestamp: '2026-06-01 14:02:12', actor: 'SYSTEM (Policy Engine)', action: 'VLAN Reassignment', target: 'A8:1D:5E:CA:EF:33', result: 'SUCCESS', details: 'Moved from VLAN 10 to VLAN 99 (Quarantine)' },
    { id: 3, timestamp: '2026-06-01 14:05:00', actor: 'admin', action: 'User Login', target: 'N/A', result: 'SUCCESS', details: 'IP: 10.0.1.15' },
    { id: 4, timestamp: '2026-06-01 14:15:33', actor: 'admin', action: 'Policy Created', target: 'Policy: IoT-Segmentation', result: 'SUCCESS', details: 'Created rule to quarantine high-risk IoT devices' },
    { id: 5, timestamp: '2026-06-01 14:22:10', actor: 'SYSTEM (Discovery)', action: 'Device Detected', target: '96:13:C7:01:40:A5', result: 'SUCCESS', details: 'Assigned to Registration VLAN (100)' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">Enterprise Audit Logs</h1>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 border border-gray-700 rounded flex items-center transition text-sm">
          <Download size={16} className="mr-2" /> Export CSV
        </button>
      </div>

      <div className="flex space-x-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search logs..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 hover:bg-gray-800 transition text-sm">
          <Filter size={16} className="mr-2" /> Filter
        </button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-950 text-gray-400 border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Timestamp</th>
                <th className="px-6 py-4 font-medium">Actor</th>
                <th className="px-6 py-4 font-medium">Action</th>
                <th className="px-6 py-4 font-medium">Target</th>
                <th className="px-6 py-4 font-medium">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {logs.map(log => (
                <tr key={log.id} className="hover:bg-gray-800/50 transition">
                  <td className="px-6 py-4 text-gray-400 font-mono text-xs">{log.timestamp}</td>
                  <td className="px-6 py-4 text-white font-medium">{log.actor}</td>
                  <td className="px-6 py-4 text-gray-300">{log.action}</td>
                  <td className="px-6 py-4 text-gray-300 font-mono">{log.target}</td>
                  <td className="px-6 py-4 text-gray-400 truncate max-w-xs" title={log.details}>{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-800 text-sm text-gray-400 text-center bg-gray-900/50">
          Showing latest 50 logs. Use export for full history.
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;
