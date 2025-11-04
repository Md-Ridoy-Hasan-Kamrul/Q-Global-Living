'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  startTransition,
} from 'react';
import { useRouter, usePathname } from 'next/navigation';

const AuthContext = createContext(null);

/**
 * Authentication Provider Component
 * Manages user authentication state and role-based access control
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check for existing session on mount using startTransition for non-urgent updates
    startTransition(() => {
      const storedUser = localStorage.getItem('user');
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;

      if (parsedUser) {
        setUser(parsedUser);
      }
      setLoading(false);
    });
  }, []);

  /**
   * Login function with role-based credentials
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} User object or error
   */
  const login = async (email, password) => {
    // Predefined credentials for role-based access
    const credentials = {
      'admin@gmail.com': {
        role: 'admin',
        name: 'Admin User',
        password: '123@123',
      },
      'user@gmail.com': {
        role: 'client',
        name: 'Client User',
        password: '123@123',
      },
      'partner@gmail.com': {
        role: 'partner',
        name: 'Partner User',
        password: '123@123',
      },
    };

    const userCred = credentials[email];

    if (!userCred || userCred.password !== password) {
      throw new Error('Invalid credentials');
    }

    const userData = {
      email,
      name: userCred.name,
      role: userCred.role,
      id: `U-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    };

    // Store in localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    // Also set a cookie for middleware
    document.cookie = `user=${JSON.stringify(
      userData
    )}; path=/; max-age=86400; SameSite=Lax`;

    setUser(userData);

    // Redirect based on role
    const locale = pathname.split('/')[1] || 'en';
    const dashboardRoutes = {
      admin: `/${locale}/dashboard/admin`,
      client: `/${locale}/dashboard/client`,
      partner: `/${locale}/dashboard/partner`,
    };

    router.push(dashboardRoutes[userCred.role]);
    return userData;
  };

  /**
   * Logout function
   */
  const logout = () => {
    localStorage.removeItem('user');

    // Remove cookie
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

    setUser(null);
    const locale = pathname.split('/')[1] || 'en';
    router.push(`/${locale}/login`);
  };

  /**
   * Check if user has required role
   * @param {string} requiredRole - Required role for access
   * @returns {boolean}
   */
  const hasRole = (requiredRole) => {
    return user?.role === requiredRole;
  };

  const value = {
    user,
    login,
    logout,
    hasRole,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Custom hook to use authentication context
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
