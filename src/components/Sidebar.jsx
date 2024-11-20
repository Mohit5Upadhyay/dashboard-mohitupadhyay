

import  { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`flex flex-col h-screen transition-all duration-300 bg-gray-800 ${isCollapsed ? "w-16" : "w-64"}`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-gray-900">
        <div className="text-white font-bold text-lg">
          <span className={`${isCollapsed ? "hidden" : "block"}`}>My Logo</span>
          <span className={`${isCollapsed ? "block" : "hidden"}`}></span>
        </div>
        {/* Collapse Button */}
        <button
          className="text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {/* {isCollapsed ? "→" : "←"} */}{isCollapsed ? "☰" : "✕"}
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1 px-2 py-4 space-y-4">
        <div className="flex items-center space-x-4 px-4 py-2 rounded-lg hover:bg-gray-700">
          <div className="text-white">🏠</div>
          <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>Home</span>
        </div>
        <div className="flex items-center space-x-4 px-4 py-2 rounded-lg hover:bg-gray-700">
          <div className="text-white">🛍️ </div>
          <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>eCommerce</span>
        </div>
        <div className="flex items-center space-x-4 px-4 py-2 rounded-lg hover:bg-gray-700">
          <div className="text-white">📇 </div>
          <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}> Contacts</span>
        </div>
        <div className="flex items-center space-x-4 px-4 py-2 rounded-lg hover:bg-gray-700">
          <div className="text-white">📊 </div>
          <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>Charts</span>
        </div>
        <div className="flex items-center space-x-4 px-4 py-2 rounded-lg hover:bg-gray-700">
          <div className="text-white">⚙️</div>
          <span className={`text-white ${isCollapsed ? "hidden" : "block"}`}>Settings</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
