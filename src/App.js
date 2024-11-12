import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Registration from "./components/Registration";
import SignOn from "./components/SignOn";
import Profile from "./components/Profile";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f6f8;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const AppWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function App() {
  const [user, setUser] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleRegister = (userData) => setRegisteredUser(userData);
  const handleSignIn = (userData) => setUser(userData);
  const handleSignOut = () => setUser(null);

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        {!registeredUser ? (
          <Registration onRegister={handleRegister} />
        ) : !user ? (
          <SignOn onSignIn={handleSignIn} registeredUser={registeredUser} />
        ) : (
          <Profile user={user} onSignOut={handleSignOut} />
        )}
      </AppWrapper>
    </>
  );
}

export default App;
