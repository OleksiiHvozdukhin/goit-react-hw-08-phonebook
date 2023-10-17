import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { StyledLink } from './AuthNav/AuthNav.module';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
