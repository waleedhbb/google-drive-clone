import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import FilesView from './components/filesView/FilesView';
import SideIcons from './components/sideIcons';
import GDriveLogo from './media/googledrivelogo.png';
import { auth, provider } from "./firebase";
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    if (!user) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        });
    } else {
      auth.signOut()
        .then(() => {
          setUser(null);
        });
    }
  };

  return (
    <div className="app">
      {user ? (
        <>
          <Header userPhoto={user.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
        <div className="app__login">
          <img src={GDriveLogo} alt="Google Drive" />
          <button onClick={handleLogin}>Log in to Google Drive</button>
        </div>
      )}
    </div>
  );
}

export default App;
