import React from 'react';
import Cashflows from './Cashflows';
import TotalRevenue from './TotalRevenue';
import Notifications from './Notifications';
import TransactionSummary from './TransctionSummary';
import InvitePeople from './Invitepeople';
import '../Styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="sidebar"> {/* Sidebar Content */} </div>
            <div className="main-content">
                <div className="widgets">
                    <Cashflows />
                    <TotalRevenue />
                </div>
                <div className="info-panels">
                    <Notifications />
                    <TransactionSummary />
                    <InvitePeople />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
