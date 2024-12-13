import React from 'react';
import { ArrowUpRight, ArrowDownLeft, ShoppingBag, Coffee, Phone, Lightbulb } from 'lucide-react';

const transactions = [
  {
    id: 1,
    icon: ShoppingBag,
    name: 'Shopping Mall',
    date: 'Today',
    amount: -2500,
    type: 'debit',
  },
  {
    id: 2,
    icon: Coffee,
    name: 'Café Coffee Day',
    date: 'Yesterday',
    amount: -350,
    type: 'debit',
  },
  {
    id: 3,
    icon: Phone,
    name: 'Mobile Recharge',
    date: '23 Mar',
    amount: -999,
    type: 'debit',
  },
  {
    id: 4,
    icon: Lightbulb,
    name: 'Electricity Bill',
    date: '22 Mar',
    amount: -1450,
    type: 'debit',
  },
];

 const RecentTransactions=()=> {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-gray-100">
                <transaction.icon className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className={`font-semibold ${
              transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.type === 'credit' ? '+' : '-'}₹{Math.abs(transaction.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RecentTransactions;