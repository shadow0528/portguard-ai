import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, Activity, Monitor, Lock, Unlock, RefreshCw } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DeviceDetails = () => {
  const { id } = useParams();
  
  // Mock data for detail view
  const activityData = [
    { time: '10:00', packets: 400 }, { time: '11:00', packets: 300 },
    { time: '12:00', packets: 550 }, { time: '13:00', packets: 900 },
    { time: '14:00', packets: 1200 }, { time: '15:00', packets: 800 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/devices" className="p-2 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white transition">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Device: A8:1D:5E:CA:EF:33</h1>
          <p className="text-sm text-gray-400">Intel Corporation • Laptop • Added on 2026-06-01</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-white mb-6 border-b border-gray-800 pb-4">Device Posture & Risk</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              
              <div className="flex items-center">
                <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-red-500/20">
                  <div className="absolute inset-0 rounded-full border-4 border-red-500 border-t-transparent animate-spin-slow"></div>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-white">85</span>
                    <span className="block text-xs text-red-500 font-medium">HIGH RISK</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Open Ports</span>
                  <span className="text-white font-mono bg-gray-800 px-2 py-1 rounded">22, 23, 445</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">OS Fingerprint</span>
                  <span className="text-white">Windows 10 / Server 2016</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Policy Violations</span>
                  <span className="text-red-500 font-medium">2 Active</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-800 pt-3">
                  <span className="text-gray-400">Current VLAN</span>
                  <span className="text-yellow-500 font-medium flex items-center">
                    VLAN 99 (Quarantine)
                  </span>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-white mb-6">Network Activity Profile</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorPackets" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#4b5563" tick={{fill: '#9ca3af', fontSize: 12}} />
                  <YAxis stroke="#4b5563" tick={{fill: '#9ca3af', fontSize: 12}} />
                  <Tooltip contentStyle={{backgroundColor: '#111827', borderColor: '#374151', color: '#fff'}} />
                  <Area type="monotone" dataKey="packets" stroke="#f59e0b" fillOpacity={1} fill="url(#colorPackets)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-white mb-6">Enforcement Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition">
                <RefreshCw size={18} className="mr-2 text-blue-400" /> Re-scan Asset
              </button>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition">
                <Activity size={18} className="mr-2 text-yellow-400" /> Reassign VLAN
              </button>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition">
                <Unlock size={18} className="mr-2" /> Unquarantine & Approve
              </button>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-red-900/30 hover:bg-red-900/50 border border-red-900/50 text-red-500 font-medium rounded-lg transition">
                <Lock size={18} className="mr-2" /> Block MAC Address
              </button>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-medium text-white mb-4">Switch Location</h3>
            <div className="bg-gray-950 p-4 rounded border border-gray-800 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Switch IP</span>
                <span className="text-gray-300 font-mono">10.0.1.5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Port</span>
                <span className="text-gray-300 font-mono">GigabitEthernet1/0/24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Switch Name</span>
                <span className="text-gray-300">CORE-SW-01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetails;
