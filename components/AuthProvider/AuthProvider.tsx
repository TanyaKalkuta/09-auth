'use client';

import { checkSession, getMe } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import { ReactNode, useEffect, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const setUser = useAuthStore(state => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    state => state.clearIsAuthenticated
  );
  // const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Перевіряємо сесію
        const sessionValid = await checkSession();
        if (sessionValid) {
          // Якщо сесія валідна — отримуємо користувача
          const user = await getMe();
          if (user) setUser(user);
        } else {
          // Якщо сесія невалідна — чистимо стан
          clearIsAuthenticated();
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [setUser, clearIsAuthenticated]);

  // ⏳ Під час перевірки — лоадер
  if (loading) {
    return <div>Loading...</div>;
  }

  // ✅ Авторизований
  return <>{children}</>;
}

export default AuthProvider;
