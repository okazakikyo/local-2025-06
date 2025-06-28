// src/components/auth/AdminProtectedRoute.jsx
import React, { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router'; // NOTE: nên dùng react-router-dom thay vì react-router
import { useEffect } from 'react';

// ✅ Hook kiểm tra quyền admin
const useAuth = () => {
    const isAdminLoggedIn = !!localStorage.getItem('adminToken');
    console.log(`AdminProtectedRoute: isAdminLoggedIn = ${isAdminLoggedIn}`);
    return { isAdminAuthenticated: isAdminLoggedIn };
};

const ADMIN_LOGIN_PATH = '/admin/login';

interface AdminProtectedRouteProps {
    children: ReactNode;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAdminAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAdminAuthenticated && location.pathname !== ADMIN_LOGIN_PATH) {
            console.warn(`Admin not authenticated. Redirecting from ${location.pathname} to ${ADMIN_LOGIN_PATH}`);
            navigate(ADMIN_LOGIN_PATH, { replace: true, state: { from: location } });
        }
    }, [isAdminAuthenticated, location, navigate]);

    if (!isAdminAuthenticated && location.pathname !== ADMIN_LOGIN_PATH) return null;

    return <>{ children } </>;
};

export default AdminProtectedRoute;

