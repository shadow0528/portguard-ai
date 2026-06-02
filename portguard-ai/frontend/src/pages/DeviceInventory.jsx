import React from 'react';
import { Search, Filter, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeviceInventory = () => {
  const devices = [
    { id: '1', mac: '00:1A:2B:3C:4D:5E', ip: '10.0.5.21', vendor: 'Cisco Systems', type: 'Switch', status: 'ACTIVE', vlan: 10, risk: 15 },
    { id: '2', mac: 'A8:1D:5E:CA:EF:33', ip: '10.0.5.45', vendor: 'Intel', type: 'Laptop', status: 'QUARANTINED', vlan: 99, risk: 85 },
    { id: '3', mac: '96:13:C7:01:40:A5', ip: '10.0.5.88', vendor: 'Apple', type: 'Mobile', status: 'ACTIVE', vlan: 20, risk: 5 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">Device Inventory</h1>
        <div className="flex space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search MAC, IP, Vendor..." 
              className="pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 hover:bg-gray-800 transition text-sm">
            <Filter size={16} className="mr-2" /> Filters
          </button>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-950 text-gray-400 border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">MAC Address</th>
                <th className="px-6 py-4 font-medium">IP Address</th>
                <th className="px-6 py-4 font-medium">Vendor</th>
                <th className="px-6 py-4 font-medium">Device Type</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">VLAN</th>
                <th className="px-6 py-4 font-medium">Risk Score</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {devices.map(device => (
                <tr key={device.id} className="hover:bg-gray-800/50 transition">
                  <td className="px-6 py-4 text-white font-mono">
                    <Link to={`/devices/${device.id}`} className="hover:text-blue-400 transition">{device.mac}</Link>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{device.ip}</td>
                  <td className="px-6 py-4 text-gray-300">{device.vendor}</td>
                  <td className="px-6 py-4 text-gray-300">{device.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      device.status === 'ACTIVE' ? 'bg-green-500/10 text-green-500' :
                      device.status === 'QUARANTINED' ? 'bg-red-500/10 text-red-500' :
                      'bg-gray-500/10 text-gray-400'
                    }`}>
                      {device.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">VLAN {device.vlan}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className={`mr-2 font-medium ${device.risk > 75 ? 'text-red-500' : device.risk > 40 ? 'text-yellow-500' : 'text-green-500'}`}>
                        {device.risk}
                      </span>
                      <div className="w-16 bg-gray-800 rounded-full h-1.5">
                        <div className={`h-1.5 rounded-full ${device.risk > 75 ? 'bg-red-500' : device.risk > 40 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{ width: `${device.risk}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-500 hover:text-white transition p-1">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-800 flex items-center justify-between text-sm text-gray-400 bg-gray-900/50">
          <div>Showing 1 to 3 of 1,245 devices</div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-700 rounded hover:bg-gray-800 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-gray-700 rounded hover:bg-gray-800">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceInventory;
