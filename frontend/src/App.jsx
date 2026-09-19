import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { useAuthStore } from './store/useAuthStore';
import PageLoader from './components/PageLoader';

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader />;

  return (
    <div data-theme="business">
      <Routes>
        <Route path='/' element={authUser ? <div>Home</div> : <Navigate to={"/login"} />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to={'/'} />} />
        <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to={'/'} />} />
      </Routes>
    </div>
  );
}

export default App;
