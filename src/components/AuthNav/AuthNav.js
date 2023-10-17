import { StyledLink } from './AuthNav.module';

export const AuthNav = () => {
  return (
    <nav>
      <StyledLink to="/register">
        {' '}
        <span></span>
        <span></span>
        <span></span>
        <span></span>Register
      </StyledLink>
      <StyledLink to="/login">
        {' '}
        <span></span>
        <span></span>
        <span></span>
        <span></span>LogIn
      </StyledLink>
    </nav>
  );
};
