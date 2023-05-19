import { Link } from 'react-router-dom';
import { NotFoundText, WrapperNotFound } from './NotFound.styled';

const NotFound = () => {
  return (
    <main>
      <WrapperNotFound>
        <NotFoundText>
          Not found this page. Go to
          <Link to="/"> Home</Link>
        </NotFoundText>
      </WrapperNotFound>
    </main>
  );
};

export default NotFound;
