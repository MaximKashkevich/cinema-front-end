import { FC } from 'react';
import styles from './header.module.scss';
import { LoginForm } from './login-form/login-form';
import { Logo } from './logo';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <LoginForm />
    </header>
  );
};
