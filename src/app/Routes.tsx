import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ChatContainer from '../features/chat/ChatContainer';
import Dashboard from '../features/dashboard/Dashboard';
import Layout from './layout';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/chat" replace />} />
            <Route path="/chat" element={<ChatContainer />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
    </Routes>
  );
};

export default AppRoutes;
