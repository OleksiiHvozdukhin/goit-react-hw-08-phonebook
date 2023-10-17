import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Header } from './AppBar.module';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
