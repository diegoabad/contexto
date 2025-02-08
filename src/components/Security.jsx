import { useContext } from 'react';
import LoginContext from '../context/LoginContext';

const Security = ({ children }) => {
  const { user } = useContext(LoginContext);
  if (!user) return <div>Debes iniciar sesión</div>;

  return <div>{children}</div>;
};

export default Security;
