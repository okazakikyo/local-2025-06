import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useLoadingBar } from 'react-top-loading-bar';
import { useAuth } from '@/auth/context/auth-context';
import AppRouter from '@/routing/app-routing-setup.tsx';

/**
 * Handle global auth-check + top-loading-bar on route changes.
 */
export const AppRouting = () => {
  const { start, complete } = useLoadingBar({
    color: 'var(--color-primary)',
    shadow: false,
    waitingTime: 400,
    transitionTime: 200,
    height: 2,
  });

  const { verify, setLoading } = useAuth();
  const [firstLoad, setFirstLoad] = useState(true);
  const location = useLocation();

  // ── Initial auth check (run once) ───────────────────────────────────────────
  useEffect(() => {
    (async () => {
      await verify().finally(() => {
        setLoading(false);
        setFirstLoad(false);
      });
    })();
  }, []); // chỉ chạy 1 lần

  // ── Auth check + loading bar cho mỗi lần đổi URL ───────────────────────────
  useEffect(() => {
    if (firstLoad) return;

    (async () => {
      start();
      try {
        await verify();
      } catch {
        throw new Error('User verify request failed!');
      } finally {
        complete();
        // auto-scroll khi URL không có hash
        if (!location.hash) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <AppRouter />;
};
