import './App.css';
import Security from './components/Security';
import Perfil from './components/Perfil';
import Home from './components/Home';
import { useContext } from 'react';
import LoginContext from './context/LoginContext';

function App() {
  const { login, user, logout } = useContext(LoginContext);

  return (
    <>
      <h1>PROP DRILLING - CHILDREN - REACT CONTEXT</h1>
      <button
        onClick={() => {
          if (!user) {
            login();
          } else {
            logout();
          }
        }}>
        {!user ? 'Login' : 'Logout'}
      </button>
      <Security>
        <Perfil />
      </Security>

      <Home />
    </>
  );
}

export default App;
