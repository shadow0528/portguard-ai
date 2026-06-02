import React from 'react';
import { ShieldAlert, Bell, CheckCircle, Info } from 'lucide-react';

const NotificationsCenter = () => {
  const notifications = [
    { id: 1, type: 'critical', title: 'High Risk Device Quarantined', message: 'Device A8:1D:5E:CA:EF:33 was moved to VLAN 99 due to suspicious port activity.', time: '10 mins ago', read: false },
    { id: 2, type: 'warning', title: 'Compliance Score Drop', message: 'Enterprise compliance score dropped below 95%. Review pending updates.', time: '2 hours ago', read: false },
    { id: 3, type: 'success', title: 'Switch Configuration Synced', message: 'Successfully synced VLAN configurations with CORE-SW-01.', time: '5 hours ago', read: true },
    { id: 4, type: 'info', title: 'System Backup Complete', message: 'Daily database backup completed successfully.', time: '1 day ago', read: true },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'critical': return <ShieldAlert size={24} className="text-red-500" />;
      case 'warning': return <Bell size={24} className="text-yellow-500" />;
      case 'success': return <CheckCircle size={24} className="text-green-500" />;
      default: return <Info size={24} className="text-blue-500" />;
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">Notifications Center</h1>
        <button className="text-sm text-blue-400 hover:text-blue-300">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {notifications.map(notif => (
          <div key={notif.id} className={`p-6 rounded-xl border ${notif.read ? 'bg-gray-900 border-gray-800' : 'bg-gray-800 border-gray-700 shadow-md'} flex items-start transition`}>
            <div className="mr-4 flex-shrink-0 mt-1">
              {getIcon(notif.type)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className={`font-semibold ${notif.read ? 'text-gray-300' : 'text-white'}`}>{notif.title}</h3>
                <span className="text-xs text-gray-500">{notif.time}</span>
              </div>
              <p className={`text-sm ${notif.read ? 'text-gray-500' : 'text-gray-300'}`}>{notif.message}</p>
            </div>
            {!notif.read && (
              <div className="w-2 h-2 rounded-full bg-blue-500 ml-4 self-center"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsCenter;
