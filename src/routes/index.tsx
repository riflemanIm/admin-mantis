import { createHashRouter, RouterProvider } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import { useUserState } from 'context/UserContext';
import structure from 'components/SidebarStructure';

// ==============================|| ROUTING RENDER ||============================== //

const router = createHashRouter([MainRoutes, LoginRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default function Routing() {
  const { isAuthenticated, currentUser } = useUserState();
  console.log('isAuthenticated', isAuthenticated);
  const rootRoute = () => {
    if (!isAuthenticated) return '/login';
    const firstItem = structure.find((it) => (it.kind ?? 'page') === 'page' && it.role?.includes(currentUser.role));
    return firstItem?.link || '/login';
  };
  return <RouterProvider router={router} />;
}
