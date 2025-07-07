import { useState } from "react";
import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import {
  BellIcon,
  HomeIcon,
  ShipWheelIcon,
  UsersIcon,
  PanelLeft,
  PanelRight,
} from "lucide-react";
import PingsyLogo from "../assets/Pingsy.png";


const Sidebar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo and toggle */}
      <div className="flex items-center justify-between p-4 border-b border-base-300">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={PingsyLogo} alt="Pingsy Logo" className="w-11" />
          {!collapsed && (
            <span className="text-2xl font-bold font-mono tracking-wider bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pingsy
            </span>
          )}
        </Link>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-sm btn-ghost ml-auto"
          title={collapsed ? "Expand" : "Collapse"}
        >
          {collapsed ? <PanelRight size={20} /> : <PanelLeft size={20} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-3 space-y-1">
        {[
          { to: "/", icon: <HomeIcon />, label: "Home" },
          { to: "/friends", icon: <UsersIcon />, label: "Friends" },
          { to: "/notifications", icon: <BellIcon />, label: "Notifications" },
        ].map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`btn btn-ghost w-full justify-start gap-3 px-3 normal-case ${
              currentPath === to ? "btn-active" : ""
            }`}
            title={collapsed ? label : undefined}
          >
            <span className="text-base-content opacity-70">{icon}</span>
            {!collapsed && <span>{label}</span>}
          </Link>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-base-300 mt-auto">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={authUser?.profilePic} alt="User Avatar" />
            </div>
          </div>
          {!collapsed && (
            <div className="flex-1">
              <p className="font-semibold text-sm">{authUser?.fullName}</p>
              <p className="text-xs text-success flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-success inline-block" />
                Online
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
