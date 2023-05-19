import { useAuth } from 'hooks/useAuth';
import { LinkActive } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkActive to="/">Home</LinkActive>
      {isLoggedIn && <LinkActive to="/contacts">Contacts</LinkActive>}
    </nav>
  );
};
