import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  LoginButton,
  LoginFormWrapper,
  LoginInput,
  LoginLabel,
  LoginWrapper,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginWrapper>
      <LoginFormWrapper onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          Email
          <LoginInput
            type="email"
            name="email"
            placeholder="Enter email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
          />
        </LoginLabel>
        <LoginLabel>
          Password
          <LoginInput
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </LoginLabel>
        <LoginButton type="submit">Log In</LoginButton>
      </LoginFormWrapper>
    </LoginWrapper>
  );
};
