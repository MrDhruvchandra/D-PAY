import React from 'react';
 
import AdminHeader from './AdminHeader';
import UserProfile from './UserProfile';

const Homepage=()=> {
  return (
    <div className="min-h-screen bg-white">
      <AdminHeader />
      <main>
        <UserProfile />
      </main>
      {/* <AdminFooter /> */}
    </div>
  );
}

export default Homepage;