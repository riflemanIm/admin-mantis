import React from 'react';
import { RouterProvider } from 'react-router-dom';

// project import
import router from './routes';
import ThemeCustomization from './themes';
import { AppLanguageProvider } from './context/LanguageContext';
import ScrollTop from './components/ScrollTop';
import { UserProvider } from './context/UserContext';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  return (
    <AppLanguageProvider>
      <ThemeCustomization>
        <UserProvider>
          <ScrollTop>
            <RouterProvider router={router} />
          </ScrollTop>
        </UserProvider>
      </ThemeCustomization>
    </AppLanguageProvider>
  );
}
