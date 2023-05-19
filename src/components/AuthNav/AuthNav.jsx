import { AuthNavActive } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthNavActive to="/register">Sign Up</AuthNavActive>
      <AuthNavActive to="/login">Log In</AuthNavActive>
    </div>
  );
};
