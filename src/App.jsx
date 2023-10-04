import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ListTodoComponent from './components/ListTodoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TodoComponent from './components/TodoComponent';
import RegisterComponenet from './components/RegisterComponenet';
import LoginComponent from './components/LoginComponent';
import { isUserLoggedIn } from './services/AuthService';
function App() {
  function AuthenticatedRoute({ children }) {
    const isAuth = isUserLoggedIn();
    if (isAuth) {
      return children;
    }
    return <Navigate to='/' />;
  }
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<LoginComponent />} />
          <Route
            path='/todos'
            element={
              <AuthenticatedRoute>
                <ListTodoComponent />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='/add-todo'
            element={
              <AuthenticatedRoute>
                <TodoComponent />
              </AuthenticatedRoute>
            }
          />
          <Route
            path='/update-todo/:id'
            element={
              <AuthenticatedRoute>
                <TodoComponent />
              </AuthenticatedRoute>
            }
          />
          <Route path='/register' element={<RegisterComponenet />} />
          <Route path='/login' element={<LoginComponent />} />
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
