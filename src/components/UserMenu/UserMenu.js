import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import { Welcome } from './UserMenu.module';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Welcome>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Logout
      </button>
    </Welcome>
  );
};
