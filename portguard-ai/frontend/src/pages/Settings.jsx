import React from 'react';
import { Save, Server, Shield, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white tracking-wide border-b border-gray-800 pb-4">Platform Configuration</h1>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex items-center">
          <Server className="text-blue-500 mr-3" size={20} />
          <h2 className="text-lg font-medium text-white">Network Discovery Settings</h2>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Scanning Subnets (CIDR)</label>
            <input type="text" defaultValue="10.0.0.0/16, 192.168.1.0/24" className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Polling Interval (Minutes)</label>
            <input type="number" defaultValue="15" className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex items-center">
          <Shield className="text-red-500 mr-3" size={20} />
          <h2 className="text-lg font-medium text-white">Security & API Configuration</h2>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Session Timeout (Hours)</label>
            <input type="number" defaultValue="8" className="w-full px-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-red-500" />
          </div>
          <div className="flex items-center space-x-3 pt-2">
            <input type="checkbox" id="mfa" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-950 border-gray-700 rounded" />
            <label htmlFor="mfa" className="text-sm font-medium text-gray-300">Enforce MFA for Administrators</label>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium flex items-center transition">
          <Save size={18} className="mr-2" /> Save Configuration
        </button>
      </div>
    </div>
  );
};

export default Settings;
