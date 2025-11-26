// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import Header from '../../components/Admin/Header';
import DashboardMain from './DashboardMain';
import BookingsPage from './BookingsPage';
import UserProfile from './UserProfile';


const Dashboard = () => {
  const [activePage, setActivePage] = useState('Dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'Dashboard':
        return <DashboardMain />;
      case 'Bookings':
        return <BookingsPage />;
      case 'User':
        return <UserProfile />;
      default:
        return <DashboardMain />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;