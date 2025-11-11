import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { LayoutDashboard, LogOut, UserCircle, Home } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const ProfileDropDown = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Check if user is on dashboard route
  const isOnDashboard = pathname?.includes("/dashboard");

  const logOutHandler = async () => {
    await logout();
    window.location.reload();
    router.push("/");
  };

  // click outside close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative flex items-end justify-center gap-1.5"
      ref={dropdownRef}
    >
      {/* avatar button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex items-center justify-center sm:w-11 w-8 h-8 sm:h-11 rounded-full overflow-hidden border-2 border-[#C5A572] dark:border-gray-700 hover:border-[#C5A572] dark:hover:border-[#C5A572] transition-all duration-200 group bg-gray-100 dark:bg-gray-800"
      >
        <UserCircle className="w-full h-full text-gray-400 dark:text-gray-500 group-hover:text-[#C5A572] transition-colors duration-200" />
      </button>
      {/* user info - shown first on desktop */}
      <div className="hidden lg:flex flex-col items-start">
        <p className="text-gray-900 dark:text-white text-sm font-semibold leading-tight">
          {user?.user?.fullName || user?.name || "User"}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
          {user?.user?.role || user?.role || "Member"}
        </p>
      </div>

      {/* dropdown menu with premium styling */}
      <div
        className={`absolute top-14 right-0 w-56 bg-white dark:bg-[#0F1B2E] rounded-md shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50 origin-top-right transition-all duration-200 ease-out
        ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* User info header in dropdown */}
        <div className="px-4 py-3 bg-linear-to-br from-gray-50 to-white dark:from-[#1A2B42] dark:to-[#0F1B2E] border-b border-[#ecd077]/30 dark:border-gray-700">
          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
            {user?.user?.fullName || user?.name || "User"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
            {user?.user?.email || user?.email || "user@example.com"}
          </p>
        </div>

        {/* Menu items */}
        <div className="py-2 px-2">
          {/* Dashboard or Home - Dynamic based on route */}
          {isOnDashboard ? (
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-[#f6efcb] dark:hover:bg-[#1A2B42] hover:text-[#C5A572] rounded-lg transition-all duration-150 group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Home</span>
            </Link>
          ) : (
            <Link
              href="/dashboard/admin"
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-[#f6efcb] dark:hover:bg-[#1A2B42] hover:text-[#C5A572] rounded-lg transition-all duration-150 group"
            >
              <LayoutDashboard className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Dashboard</span>
            </Link>
          )}

          {/* Divider */}
          <div className="h-px bg-[#ecd077]/30 dark:bg-gray-700 my-2"></div>

          {/* Logout */}
          <button
            onClick={logOutHandler}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-150 group"
          >
            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropDown;
