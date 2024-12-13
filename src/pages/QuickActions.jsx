
import React from 'react';
import { Smartphone, CreditCard, Banknote, Lightbulb, Wifi, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const actions = [
  { icon: Smartphone, label: 'Mobile', color: 'text-blue-600' },
  { icon: CreditCard, label: 'Cards', color: 'text-purple-600' },
  { icon: Banknote, label: 'Bills', color: 'text-green-600' },
  { icon: Lightbulb, label: 'Electricity', color: 'text-yellow-600' },
  { icon: Wifi, label: 'Internet', color: 'text-red-600' },
  { icon: Car, label: 'Transport', color: 'text-indigo-600' },
];

 const  QuickActions=()=> {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <Link to={"/coming-soon"} className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {actions.map(({ icon: Icon, label, color }) => (
          <button
            key={label}
            className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50"
          >
            <Icon className={`h-8 w-8 ${color} mb-2`} />
            <span className="text-sm text-gray-600">{label}</span>
          </button>
        ))}
      </Link>
    </div>
  );
}
export default QuickActions;
