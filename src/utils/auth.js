/**
 * Authentication utility functions
 * Provides helper functions for role-based access control
 */

/**
 * Get user from localStorage
 * @returns {Object|null} User object or null
 */
export const getStoredUser = () => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  return !!getStoredUser();
};

/**
 * Check if user has specific role
 * @param {string} role - Required role
 * @returns {boolean}
 */
export const hasRole = (role) => {
  const user = getStoredUser();
  return user?.role === role;
};

/**
 * Get dashboard route based on user role
 * @param {string} locale - Current locale
 * @returns {string} Dashboard route
 */
export const getDashboardRoute = (locale = 'en') => {
  const user = getStoredUser();
  if (!user) return `/${locale}/login`;

  const routes = {
    admin: `/${locale}/dashboard/admin`,
    client: `/${locale}/dashboard/client`,
    partner: `/${locale}/dashboard/partner`,
  };

  return routes[user.role] || `/${locale}/login`;
};

/**
 * Check if current path is a dashboard route
 * @param {string} pathname - Current pathname
 * @returns {boolean}
 */
export const isDashboardRoute = (pathname) => {
  return pathname.includes('/dashboard/');
};

/**
 * Get role from pathname
 * @param {string} pathname - Current pathname
 * @returns {string|null} Role or null
 */
export const getRoleFromPath = (pathname) => {
  if (pathname.includes('/dashboard/admin')) return 'admin';
  if (pathname.includes('/dashboard/client')) return 'client';
  if (pathname.includes('/dashboard/partner')) return 'partner';
  return null;
};
