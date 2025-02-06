import React, { useState } from 'react';
import SideNavbar from './components/sidenNavbar/SideNavbar';
import Dashboard from './components/Dashboard/Dashboard';
import AllUser from './components/AllUser/AllUser';
import AddProject from './components/AddProjects/AddProject';
import AllProject from './components/AllProject/AllProject';
// Import actual components



const AdminPanel = () => {
  // State to keep track of the currently selected component to render
  const [selectedComponent, setSelectedComponent] = useState('dashboard');

  // Handlers to change the selected component
  const showDashboard = () => setSelectedComponent('dashboard');
  const showAddProject = () => setSelectedComponent('addProject');
  const showAllUsers = () => setSelectedComponent('allUsers');
  const showAllProject = () => setSelectedComponent('allProject');

  // Render different components based on the selected state
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'addProject':
        return <AddProject />;
      case 'allUsers':
        return <AllUser />;
      case 'allProject':
        return <AllProject />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full px-4">
      {/* Side Navbar */}
      <SideNavbar
        onDashboard={showDashboard}
        onAddProject={showAddProject}
        onAllUsers={showAllUsers}
        onAllProject={showAllProject}
      />

      {/* Main Content Area */}
      <div className="w-full md:w-4/5 lg:px-8">
        {renderComponent()}
      </div>
    </div>
  );
};

export default AdminPanel;
