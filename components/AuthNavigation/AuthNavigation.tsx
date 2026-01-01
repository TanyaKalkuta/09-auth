'use client';
import css from './AuthNavigation.module.css';
import Link from 'next/link';
import { useAuthStore } from '@/lib/store/authStore';
import { logout } from '@/lib/api/clientApi';
import { useRouter } from 'next/navigation';
// import NavLink from '../NavLink/NavLink';

function AuthNavigation() {
  const router = useRouter();
  // Отримуємо поточну сесію та юзера
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const user = useAuthStore(state => state.user);
  const clearIsAuthenticated = useAuthStore(
    state => state.clearIsAuthenticated
  );

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push('/sign-in');
  };
  // Якщо є сесія - відображаємо Logout та інформацію про користувача
  // інакше - посилання на логін та реєстрацію
  return isAuthenticated ? (
    <>
      <li className={css.navigationItem}>
        <Link href="/profile" prefetch={false} className={css.navigationLink}>
          Profile
        </Link>
      </li>

      <li className={css.navigationItem}>
        <p className={css.userEmail}>{user?.username}</p>
        <button onClick={handleLogout} className={css.logoutButton}>
          Logout
        </button>
      </li>
    </>
  ) : (
    <>
      <li className={css.navigationItem}>
        <Link href="/sign-in" prefetch={false} className={css.navigationLink}>
          Login
        </Link>
      </li>

      <li className={css.navigationItem}>
        <Link href="/sign-up" prefetch={false} className={css.navigationLink}>
          Sign up
        </Link>
      </li>
    </>
  );
}

export default AuthNavigation;
