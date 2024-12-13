import React from 'react';
import { Appbar } from '../components/Appbar';
import { Balance } from '../components/Balance';
import { Users } from '../components/Users';
import QuickActions from './QuickActions';
import RecentTransactions from './Transactions';

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div className="m-8 space-y-8">
        <Balance value="10,000" />
        <QuickActions />
        <Users />

        <RecentTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
