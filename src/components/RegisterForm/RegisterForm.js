import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { LoginBox, UserBox } from './RegisterForm.module';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginBox>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <UserBox>
          <input
            type="text"
            name="name"
            pattern="[A-Za-z]{3,}"
            title="Login must include min 3 Latin characters"
          />
          <label>Username</label>
        </UserBox>

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
          Register
        </button>
      </form>
    </LoginBox>
  );
};
