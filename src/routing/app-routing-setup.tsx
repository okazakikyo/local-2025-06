import { FC, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import MainLayout from '@/components/MainLayout';
import BackToTopButton from '@/components/common/BackToTopButton';

// --- lazy-loaded pages -------------------------------------------------------
const HomePage        = lazy(() => import('@/pages/HomePage'));
const AboutPage       = lazy(() => import('@/pages/AboutPage'));
const MenuPage        = lazy(() => import('@/pages/MenuPage'));
const ReservationPage = lazy(() => import('@/pages/ReservationPage'));
const Error404        = lazy(() => import('@/errors/error-404'));

// --- router ------------------------------------------------------------------
const AppRouter: FC = () => (
    <>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* ---------- MainLayout routes ---------- */}
                <Route element={<MainLayout />}>
                    <Route index                element={<Navigate to="home" replace />} />
                    <Route path="home"          element={<HomePage />} />
                    <Route path="about"         element={<AboutPage />} />
                    <Route path="menu"          element={<MenuPage />} />
                    <Route path="reservation"   element={<ReservationPage />} />
                </Route>

                {/* ---------- catch-all ---------- */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Suspense>

        {/* utilities that should always be present */}
        <BackToTopButton />
    </>
);

export default AppRouter;
