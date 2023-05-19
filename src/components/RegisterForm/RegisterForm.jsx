import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import {
  RegisterButton,
  RegisterFormWrapper,
  RegisterInput,
  RegisterLabel,
  RegisterWrapper,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterWrapper>
      <RegisterFormWrapper onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          Username
          <RegisterInput
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </RegisterLabel>
        <RegisterLabel>
          Email
          <RegisterInput
            type="email"
            name="email"
            placeholder="Enter email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
          />
        </RegisterLabel>
        <RegisterLabel>
          Password
          <RegisterInput
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </RegisterLabel>
        <RegisterButton type="submit">Sign Up</RegisterButton>
      </RegisterFormWrapper>
    </RegisterWrapper>
  );
};
