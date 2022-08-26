import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../services/auth/api';



export { RouteGuard };

function RouteGuard({ children }: any) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check

    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in

    const publicPaths = ['/login', '/register'];
    const path = url.split('?')[0];
    const currentUser = await getCurrentUser();
    if (currentUser.status !== 200 && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: '/movies' },
      });
    } else {
      setAuthorized(true);
    }
  }

  return authorized && children;
}
