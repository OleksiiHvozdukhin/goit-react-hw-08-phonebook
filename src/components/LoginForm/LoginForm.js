import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { LoginBox, UserBox } from './LoginForm.module';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;
    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginBox>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <UserBox>
          <input
            type="email"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Missing an '@' or '.' character"
          />
          <label>Email</label>
        </UserBox>
        <UserBox>
          <input
            type="password"
            name="password"
            pattern=".{7,10}"
            title="Password must include 7 to 10 simbols"
          />
          <label>Password</label>
        </UserBox>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Log In
        </button>
      </form>
    </LoginBox>
  );
};
