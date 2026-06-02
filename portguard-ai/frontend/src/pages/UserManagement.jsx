import React from 'react';
import { Users, UserPlus, Shield, Key } from 'lucide-react';

const UserManagement = () => {
  const users = [
    { id: 1, username: 'admin', role: 'SUPER_ADMIN', lastLogin: '2026-06-01 14:05:00', status: 'Active' },
    { id: 2, username: 'sec_analyst_1', role: 'SECURITY_ANALYST', lastLogin: '2026-06-01 09:12:00', status: 'Active' },
    { id: 3, username: 'net_eng_1', role: 'NETWORK_ENGINEER', lastLogin: '2026-05-30 16:45:00', status: 'Inactive' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">User Access Management</h1>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center transition">
          <UserPlus size={18} className="mr-2" /> Add User
        </button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-950 text-gray-400 border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Username</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Last Login</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-800/50 transition">
                  <td className="px-6 py-4 text-white font-medium flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3 text-blue-400">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                    {user.username}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-gray-800 text-gray-300 border border-gray-700 rounded text-xs font-mono">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{user.lastLogin}</td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center text-xs font-medium ${user.status === 'Active' ? 'text-green-500' : 'text-gray-500'}`}>
                      <div className={`w-2 h-2 rounded-full mr-2 ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-end space-x-2">
                    <button className="p-1.5 text-gray-400 hover:text-white transition"><Key size={16} /></button>
                    <button className="p-1.5 text-gray-400 hover:text-white transition"><Shield size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
